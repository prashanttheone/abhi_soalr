'use client';

import React, { useState, useEffect } from 'react';
import { Card, Image as AntImage, Tag, Flex, Button, Row, Col, Modal, Form, Input, message, Select, Upload, Radio } from 'antd';
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined, ReloadOutlined, DatabaseOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';

interface GalleryItem {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminGallery: React.FC = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [imageInputType, setImageInputType] = useState<'url' | 'upload'>('url');
  const [editImageInputType, setEditImageInputType] = useState<'url' | 'upload'>('url');
  const [uploadedFileList, setUploadedFileList] = useState<UploadFile[]>([]);
  const [editUploadedFileList, setEditUploadedFileList] = useState<UploadFile[]>([]);

  const categories = [
    'Installation',
    'Commercial',
    'Residential',
    'Testing',
    'Storage',
    'Team',
    'Monitoring',
    'Maintenance',
  ];

  // Fetch all gallery images
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/gallery');
      const result = await response.json();
      if (result.success) {
        setImages(result.data);
      } else {
        message.error('Failed to fetch gallery images');
      }
    } catch (error) {
      message.error('Error fetching gallery images');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Seed database with initial data
  const handleSeed = async () => {
    Modal.confirm({
      title: 'Seed Gallery Database',
      content: 'This will populate the database with 12 sample gallery images. Continue?',
      onOk: async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/gallery/seed', {
            method: 'POST',
          });

          const result = await response.json();
          if (result.success) {
            message.success(result.message);
            fetchImages();
          } else {
            message.warning(result.message || 'Failed to seed database');
          }
        } catch (error) {
          message.error('Error seeding database');
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
    });
  };

  // Create new gallery image
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

      const response = await fetch('/api/gallery', {
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
        message.success('Gallery image created successfully');
        setCreateModalOpen(false);
        form.resetFields();
        setUploadedFileList([]);
        setImageInputType('url');
        fetchImages();
      } else {
        message.error(result.error || 'Failed to create gallery image');
      }
    } catch (error) {
      message.error('Error creating gallery image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Update gallery image
  const handleUpdate = async (values: any) => {
    if (!selectedImage) return;

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

      const response = await fetch(`/api/gallery/${selectedImage._id}`, {
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
        message.success('Gallery image updated successfully');
        setEditModalOpen(false);
        setSelectedImage(null);
        editForm.resetFields();
        setEditUploadedFileList([]);
        setEditImageInputType('url');
        fetchImages();
      } else {
        message.error(result.error || 'Failed to update gallery image');
      }
    } catch (error) {
      message.error('Error updating gallery image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete gallery image
  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: 'Delete Gallery Image',
      content: 'Are you sure you want to delete this gallery image?',
      okText: 'Delete',
      okType: 'danger',
      onOk: async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/gallery/${id}`, {
            method: 'DELETE',
          });

          const result = await response.json();
          if (result.success) {
            message.success('Gallery image deleted successfully');
            fetchImages();
          } else {
            message.error(result.error || 'Failed to delete gallery image');
          }
        } catch (error) {
          message.error('Error deleting gallery image');
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
    });
  };

  // Open edit modal
  const openEditModal = (image: GalleryItem) => {
    setSelectedImage(image);
    editForm.setFieldsValue({
      title: image.title,
      subtitle: image.subtitle,
      description: image.description,
      image: image.image,
      category: image.category,
    });
    setEditModalOpen(true);
  };

  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <Flex gap="small">
          <Button
            icon={<DatabaseOutlined />}
            onClick={handleSeed}
            disabled={loading}
          >
            Seed Data
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={fetchImages}
            disabled={loading}
          >
            Refresh
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setCreateModalOpen(true)}
          >
            Add Gallery Item
          </Button>
        </Flex>
      </Flex>

      <div className="mb-4">
        <Tag color="blue">Total Images: {images.length}</Tag>
      </div>

      <Row gutter={[16, 16]}>
        {images.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item._id}>
            <Card
              hoverable
              loading={loading}
              cover={
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <AntImage
                    alt={item.title}
                    src={item.image}
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
                  onClick={() => openEditModal(item)}
                >
                  Edit
                </Button>,
                <Button
                  key="delete"
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>,
              ]}
            >
              <Card.Meta
                title={<div className="truncate">{item.title}</div>}
                description={
                  <Flex vertical gap="small">
                    <div className="text-sm text-gray-500 truncate">
                      {item.subtitle}
                    </div>
                    <Tag color="green">{item.category}</Tag>
                  </Flex>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Create Modal */}
      <Modal
        title="Add New Gallery Item"
        open={createModalOpen}
        onCancel={() => {
          setCreateModalOpen(false);
          form.resetFields();
        }}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleCreate}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter title' }]}
          >
            <Input placeholder="Enter image title" />
          </Form.Item>

          <Form.Item
            label="Subtitle"
            name="subtitle"
            rules={[{ required: true, message: 'Please enter subtitle' }]}
          >
            <Input placeholder="Enter subtitle" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea rows={3} placeholder="Enter description" />
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
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select placeholder="Select category">
              {categories.map((cat) => (
                <Select.Option key={cat} value={cat}>
                  {cat}
                </Select.Option>
              ))}
            </Select>
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
        title="Edit Gallery Item"
        open={editModalOpen}
        onCancel={() => {
          setEditModalOpen(false);
          setSelectedImage(null);
          editForm.resetFields();
        }}
        footer={null}
        width={600}
      >
        <Form form={editForm} layout="vertical" onFinish={handleUpdate}>
          {selectedImage && (
            <div className="mb-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 8 }}
              />
            </div>
          )}

          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter title' }]}
          >
            <Input placeholder="Enter image title" />
          </Form.Item>

          <Form.Item
            label="Subtitle"
            name="subtitle"
            rules={[{ required: true, message: 'Please enter subtitle' }]}
          >
            <Input placeholder="Enter subtitle" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea rows={3} placeholder="Enter description" />
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
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select placeholder="Select category">
              {categories.map((cat) => (
                <Select.Option key={cat} value={cat}>
                  {cat}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Flex gap="small" justify="flex-end">
              <Button
                onClick={() => {
                  setEditModalOpen(false);
                  setSelectedImage(null);
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

export default AdminGallery;
