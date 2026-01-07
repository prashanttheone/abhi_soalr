import jwt from 'jsonwebtoken';

// JWT Configuration
export const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
export const JWT_EXPIRES_IN = '48h'; // Token expires in 48 hours

// Interface for JWT payload
export interface JWTPayload {
  userId: string;
  userID: string;
  email: string;
}

// Generate JWT token
export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    return null;
  }
}

// Extract token from Authorization header
export function extractTokenFromHeader(authHeader: string | null): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}
