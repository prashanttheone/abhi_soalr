'use client';

import React from 'react';
import { Card, Row, Col, Statistic, Flex } from 'antd';
import { UploadOutlined, PictureOutlined, FileImageOutlined } from '@ant-design/icons';
import ImageUploadComponent from '@/component/upload/Upload';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Flex vertical gap="large" style={{ width: '100%' }}>
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Total Uploads"
                value={0}
                prefix={<UploadOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Images"
                value={0}
                prefix={<PictureOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Storage Used"
                value={0}
                suffix="MB"
                prefix={<FileImageOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Card title="Upload Images" bordered={false}>
          <ImageUploadComponent maxCount={10} multiple={true} />
        </Card>
      </Flex>
    </div>
  );
};

export default Dashboard;
