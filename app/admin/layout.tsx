'use client';

import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme, App, Button, Dropdown } from 'antd';
import 'antd/dist/reset.css';
import {
  DashboardOutlined,
  PictureOutlined,
  AppstoreOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const { Header, Sider, Content } = Layout;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<any>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const pathname = usePathname();
  const router = useRouter();

  // Get user from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    // Clear token from cookie
    document.cookie = 'authToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
    // Clear localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    // Redirect to login
    router.push('/login');
  };

  const menuItems = [
    {
      key: '/admin/dashboard',
      icon: <DashboardOutlined />,
      label: <Link href="/admin/dashboard">Dashboard</Link>,
    },
    {
      key: '/admin/images',
      icon: <PictureOutlined />,
      label: <Link href="/admin/images">Images</Link>,
    },
    {
      key: '/admin/gallery',
      icon: <AppstoreOutlined />,
      label: <Link href="/admin/gallery">Gallery</Link>,
    },
    {
      key: '/admin/about',
      icon: <TeamOutlined />,
      label: <Link href="/admin/about">Team</Link>,
    },
  ];

  return (
    <App>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            style={{
              height: 64,
              margin: 16,
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: borderRadiusLG,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {collapsed ? 'A' : 'Admin'}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <h2 style={{ margin: 0, flex: 1 }}>Admin Panel</h2>
            
            {/* User Menu */}
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'user',
                    label: user?.email || 'User',
                    icon: <UserOutlined />,
                    disabled: true,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: 'logout',
                    label: 'Logout',
                    icon: <LogoutOutlined />,
                    danger: true,
                    onClick: handleLogout,
                  },
                ],
              }}
              placement="bottomRight"
            >
              <Button
                type="text"
                icon={<UserOutlined />}
                style={{ marginRight: 16 }}
              >
                {user?.userID || 'User'}
              </Button>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </App>
  );
}
