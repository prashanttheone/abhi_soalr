'use client';

import React, { useState, useEffect } from 'react';
import { Card, Image as AntImage, Tag, Flex, Button, Row, Col, Modal, Form, Input, message, Upload, Radio, InputNumber } from 'antd';
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined, ReloadOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const AdminTeam: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [imageInputType, setImageInputType] = useState<'url' | 'upload'>('url');
  const [editImageInputType, setEditImageInputType] = useState<'url' | 'upload'>('url');
  const [uploadedFileList, setUploadedFileList] = useState<UploadFile[]>([]);
  const [editUploadedFileList, setEditUploadedFileList] = useState<UploadFile[]>([]);

  // Fetch all team members
  const fetchMembers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/about');
      const result = await response.json();
      if (result.success) {
        setMembers(result.data);
      } else {
        message.error('Failed to fetch team members');
      }
    } catch (error) {
      message.error('Error fetching team members');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Create new team member
  const handleCreate = async (values: any) => {
    setLoading(true);
    try {
      let imageUrl = values.image;

      // If uploading image, upload to Cloudinary first
      if (imageInputType === 'upload') {
        if (uploadedFileList.length === 0) {
          message.warning('Please select an image to upload');
          setLoading(false);
          return;
        }

        const formData = new FormData();
        formData.append('file', uploadedFileList[0].originFileObj as File);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const uploadResult = await uploadResponse.json();
        if (uploadResult.url) {
          imageUrl = uploadResult.url;
        } else {
          message.error('Failed to upload image');
          setLoading(false);
          return;
        }
      }

      const response = await fetch('/api/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          image: imageUrl,
        }),
      });

      const result = await response.json();
      if (result.success) {
        message.success('Team member created successfully');
        setCreateModalOpen(false);
        form.resetFields();
        setUploadedFileList([]);
        setImageInputType('url');
        fetchMembers();
      } else {
        message.error(result.error || 'Failed to create team member');
      }
    } catch (error) {
      message.error('Error creating team member');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Update team member
  const handleUpdate = async (values: any) => {
    if (!selectedMember) return;

    setLoading(true);
    try {
      let imageUrl = values.image;

      // If uploading new image, upload to Cloudinary first
      if (editImageInputType === 'upload' && editUploadedFileList.length > 0) {
        const formData = new FormData();
        formData.append('file', editUploadedFileList[0].originFileObj as File);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const uploadResult = await uploadResponse.json();
        if (uploadResult.url) {
          imageUrl = uploadResult.url;
        } else {
          message.error('Failed to upload image');
          setLoading(false);
          return;
        }
      }

      const response = await fetch(`/api/about/${selectedMember._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          image: imageUrl,
        }),
      });

      const result = await response.json();
      if (result.success) {
        message.success('Team member updated successfully');
        setEditModalOpen(false);
        setSelectedMember(null);
        editForm.resetFields();
        setEditUploadedFileList([]);
        setEditImageInputType('url');
        fetchMembers();
      } else {
        message.error(result.error || 'Failed to update team member');
      }
    } catch (error) {
      message.error('Error updating team member');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete team member
  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: 'Delete Team Member',
      content: 'Are you sure you want to delete this team member?',
      okText: 'Delete',
      okType: 'danger',
      onOk: async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/about/${id}`, {
            method: 'DELETE',
          });

          const result = await response.json();
          if (result.success) {
            message.success('Team member deleted successfully');
            fetchMembers();
          } else {
            message.error(result.error || 'Failed to delete team member');
          }
        } catch (error) {
          message.error('Error deleting team member');
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
    });
  };

  // Open edit modal
  const openEditModal = (member: TeamMember) => {
    setSelectedMember(member);
    editForm.setFieldsValue({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image,
      linkedin: member.linkedin,
      twitter: member.twitter,
      order: member.order,
    });
    setEditModalOpen(true);
  };

  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <h1 className="text-2xl font-bold">Team Management</h1>
        <Flex gap="small">
          <Button
            icon={<ReloadOutlined />}
            onClick={fetchMembers}
            disabled={loading}
          >
            Refresh
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setCreateModalOpen(true)}
          >
            Add Team Member
          </Button>
        </Flex>
      </Flex>

      <div className="mb-4">
        <Tag color="blue">Total Members: {members.length}</Tag>
      </div>

      <Row gutter={[16, 16]}>
        {members.map((member) => (
          <Col xs={24} sm={12} md={8} lg={6} key={member._id}>
            <Card
              hoverable
              loading={loading}
              cover={
                <div style={{ height: 280, overflow: 'hidden' }}>
                  <AntImage
                    alt={member.name}
                    src={member.image}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    preview={{
                      actionsRender: () => [],
                    }}
                  />
                </div>
              }
              actions={[
                <Button
                  key="edit"
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => openEditModal(member)}
                >
                  Edit
                </Button>,
                <Button
                  key="delete"
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(member._id)}
                >
                  Delete
                </Button>,
              ]}
            >
              <Card.Meta
                title={<div className="truncate">{member.name}</div>}
                description={
                  <Flex vertical gap="small">
                    <Tag color="green">{member.role}</Tag>
                    <div className="text-sm text-gray-600 line-clamp-2">
                      {member.bio}
                    </div>
                    <Flex gap="small">
                      {member.linkedin && member.linkedin !== '#' && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <LinkedinOutlined style={{ fontSize: 16 }} />
                        </a>
                      )}
                      {member.twitter && member.twitter !== '#' && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <TwitterOutlined style={{ fontSize: 16 }} />
                        </a>
                      )}
                    </Flex>
                    <Tag color="orange">Order: {member.order}</Tag>
                  </Flex>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Create Modal */}
      <Modal
        title="Add New Team Member"
        open={createModalOpen}
        onCancel={() => {
          setCreateModalOpen(false);
          form.resetFields();
          setUploadedFileList([]);
          setImageInputType('url');
        }}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleCreate}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input placeholder="Enter member name" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please enter role' }]}
          >
            <Input placeholder="Enter role/position" />
          </Form.Item>

          <Form.Item
            label="Bio"
            name="bio"
            rules={[{ required: true, message: 'Please enter bio' }]}
          >
            <Input.TextArea rows={3} placeholder="Enter bio/description" />
          </Form.Item>

          <Form.Item
            label="Image"
            required
          >
            <Radio.Group
              value={imageInputType}
              onChange={(e) => setImageInputType(e.target.value)}
              className="mb-3"
            >
              <Radio value="url">Image URL</Radio>
              <Radio value="upload">Upload Image</Radio>
            </Radio.Group>

            {imageInputType === 'url' ? (
              <Form.Item
                name="image"
                noStyle
                rules={[{ required: true, message: 'Please enter image URL' }]}
              >
                <Input placeholder="https://example.com/image.jpg" />
              </Form.Item>
            ) : (
              <Upload
                listType="picture-card"
                fileList={uploadedFileList}
                onChange={({ fileList }) => setUploadedFileList(fileList)}
                beforeUpload={() => false}
                maxCount={1}
                accept="image/*"
              >
                {uploadedFileList.length === 0 && (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            label="LinkedIn URL"
            name="linkedin"
          >
            <Input placeholder="https://linkedin.com/in/username" />
          </Form.Item>

          <Form.Item
            label="Twitter URL"
            name="twitter"
          >
            <Input placeholder="https://twitter.com/username" />
          </Form.Item>

          <Form.Item
            label="Display Order"
            name="order"
            initialValue={0}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="0" />
          </Form.Item>

          <Form.Item>
            <Flex gap="small" justify="flex-end">
              <Button
                onClick={() => {
                  setCreateModalOpen(false);
                  form.resetFields();
                  setUploadedFileList([]);
                  setImageInputType('url');
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Create
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Team Member"
        open={editModalOpen}
        onCancel={() => {
          setEditModalOpen(false);
          setSelectedMember(null);
          editForm.resetFields();
          setEditUploadedFileList([]);
          setEditImageInputType('url');
        }}
        footer={null}
        width={600}
      >
        <Form form={editForm} layout="vertical" onFinish={handleUpdate}>
          {selectedMember && (
            <div className="mb-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                style={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 8 }}
              />
            </div>
          )}

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input placeholder="Enter member name" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please enter role' }]}
          >
            <Input placeholder="Enter role/position" />
          </Form.Item>

          <Form.Item
            label="Bio"
            name="bio"
            rules={[{ required: true, message: 'Please enter bio' }]}
          >
            <Input.TextArea rows={3} placeholder="Enter bio/description" />
          </Form.Item>

          <Form.Item
            label="Image"
            required
          >
            <Radio.Group
              value={editImageInputType}
              onChange={(e) => setEditImageInputType(e.target.value)}
              className="mb-3"
            >
              <Radio value="url">Image URL</Radio>
              <Radio value="upload">Upload New Image</Radio>
            </Radio.Group>

            {editImageInputType === 'url' ? (
              <Form.Item
                name="image"
                noStyle
                rules={[{ required: true, message: 'Please enter image URL' }]}
              >
                <Input placeholder="https://example.com/image.jpg" />
              </Form.Item>
            ) : (
              <Upload
                listType="picture-card"
                fileList={editUploadedFileList}
                onChange={({ fileList }) => setEditUploadedFileList(fileList)}
                beforeUpload={() => false}
                maxCount={1}
                accept="image/*"
              >
                {editUploadedFileList.length === 0 && (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            label="LinkedIn URL"
            name="linkedin"
          >
            <Input placeholder="https://linkedin.com/in/username" />
          </Form.Item>

          <Form.Item
            label="Twitter URL"
            name="twitter"
          >
            <Input placeholder="https://twitter.com/username" />
          </Form.Item>

          <Form.Item
            label="Display Order"
            name="order"
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="0" />
          </Form.Item>

          <Form.Item>
            <Flex gap="small" justify="flex-end">
              <Button
                onClick={() => {
                  setEditModalOpen(false);
                  setSelectedMember(null);
                  editForm.resetFields();
                  setEditUploadedFileList([]);
                  setEditImageInputType('url');
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Update
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminTeam;
