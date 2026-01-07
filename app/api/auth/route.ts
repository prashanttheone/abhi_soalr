import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { User } from '@/schema/auth';
import { generateToken, verifyToken, extractTokenFromHeader } from '@/lib/auth';
import bcrypt from 'bcryptjs';

// POST - Signup (Create new user)
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { action, userID, email, password } = body;

    // SIGNUP
    if (action === 'signup') {
      // Validate input
      if (!userID || !email || !password) {
        return NextResponse.json(
          { success: false, error: 'All fields are required' },
          { status: 400 }
        );
      }

      if (password.length < 6) {
        return NextResponse.json(
          { success: false, error: 'Password must be at least 6 characters' },
          { status: 400 }
        );
      }

      // Check if user already exists
      const existingUserByEmail = await User.findOne({ email });
      if (existingUserByEmail) {
        return NextResponse.json(
          { success: false, error: 'Email already registered' },
          { status: 400 }
        );
      }

      const existingUserByID = await User.findOne({ userID });
      if (existingUserByID) {
        return NextResponse.json(
          { success: false, error: 'User ID already taken' },
          { status: 400 }
        );
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = await User.create({
        userID,
        email,
        password: hashedPassword,
      });

      // Generate JWT token
      const token = generateToken({
        userId: newUser._id.toString(),
        userID: newUser.userID,
        email: newUser.email,
      });

      return NextResponse.json(
        {
          success: true,
          message: 'User created successfully',
          token,
          user: {
            id: newUser._id,
            userID: newUser.userID,
            email: newUser.email,
          },
        },
        { status: 201 }
      );
    }

    // LOGIN
    if (action === 'login') {
      // Validate input
      if (!email || !password) {
        return NextResponse.json(
          { success: false, error: 'Email and password are required' },
          { status: 400 }
        );
      }

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { success: false, error: 'Invalid email or password' },
          { status: 401 }
        );
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { success: false, error: 'Invalid email or password' },
          { status: 401 }
        );
      }

      // Generate JWT token
      const token = generateToken({
        userId: user._id.toString(),
        userID: user.userID,
        email: user.email,
      });

      return NextResponse.json({
        success: true,
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          userID: user.userID,
          email: user.email,
        },
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Auth error:', error);
    
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// GET - Verify token (optional - for checking if user is authenticated)
export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const token = extractTokenFromHeader(authHeader);
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    
    if (!decoded) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({
      success: true,
      user: {
        userId: decoded.userId,
        userID: decoded.userID,
        email: decoded.email,
      },
    });
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Token verification failed' },
      { status: 500 }
    );
  }
}
