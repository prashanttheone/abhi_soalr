'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Tabs, Form, Input, Button, message, Card } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const [loginForm] = Form.useForm();
  const [signupForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/admin/dashboard';

  // Check if already logged in
  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));
    if (token) {
      // Already logged in, redirect
      router.push(redirectTo);
    }
  }, [router, redirectTo]);

  // Helper function to set cookie
  const setCookie = (name: string, value: string, days: number = 2) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
  };

  // Handle Login
  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'login',
          email: values.email,
          password: values.password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        message.success(result.message || 'Login successful!');
        
        // Store token in both cookie and localStorage
        setCookie('authToken', result.token, 2); // 2 days
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        
        // Redirect to intended page or admin dashboard
        setTimeout(() => {
          router.push(redirectTo);
        }, 500);
      } else {
        message.error(result.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  // Handle Signup
  const handleSignup = async (values: { userID: string; email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'signup',
          userID: values.userID,
          email: values.email,
          password: values.password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        message.success(result.message || 'Account created successfully!');
        
        // Store token in both cookie and localStorage
        setCookie('authToken', result.token, 2); // 2 days
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        
        // Switch to login tab or redirect
        signupForm.resetFields();
        message.info('Redirecting to dashboard...');
        setTimeout(() => {
          router.push(redirectTo);
        }, 1000);
      } else {
        message.error(result.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      message.error('An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  const tabItems = [
    {
      key: 'login',
      label: (
        <span>
          <LoginOutlined /> Login
        </span>
      ),
      children: (
        <Form
          form={loginForm}
          name="login"
          onFinish={handleLogin}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
              icon={<LoginOutlined />}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: 'signup',
      label: (
        <span>
          <UserAddOutlined /> Sign Up
        </span>
      ),
      children: (
        <Form
          form={signupForm}
          name="signup"
          onFinish={handleSignup}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="userID"
            label="User ID"
            rules={[
              { required: true, message: 'Please input your user ID!' },
              { min: 3, message: 'User ID must be at least 3 characters!' },
              { pattern: /^[a-zA-Z0-9_]+$/, message: 'User ID can only contain letters, numbers, and underscores!' },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Choose a unique user ID"
              autoComplete="username"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Create a password (min 6 characters)"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm your password"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
              icon={<UserAddOutlined />}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4">
      <Card
        className="w-full max-w-md shadow-2xl"
        style={{ borderRadius: 12 }}
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mb-4">
            <span className="text-white font-bold text-2xl">☀</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Green Sun Innovations</h1>
          <p className="text-gray-600 mt-2">Welcome back! Please login to continue</p>
        </div>

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          centered
          size="large"
        />

        <div className="text-center mt-4 text-sm text-gray-500">
          <p>Token expires in 48 hours after login</p>
        </div>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
