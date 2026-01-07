'use client';

import React, { useState, useEffect } from 'react';
import { Card, Image as AntImage, Tag, Flex, Button, Row, Col, Modal, Form, Input, message, Upload } from 'antd';
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useImageUpload } from '@/hooks/upload';
import type { UploadFile } from 'antd';

interface ImageItem {
  _id: string;
  imageUrl: string;
  title?: string;
  description?: string;
  tags?: string[];
  uploadedAt: Date;
  fileSize?: number;
  fileType?: string;
  width?: number;
  height?: number;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  
  const {
    fileList,
    handleChange,
    handlePreview,
    clearFiles,
  } = useImageUpload();

  // Fetch all images
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/images');
      const result = await response.json();
      if (result.success) {
        setImages(result.data);
      } else {
        message.error('Failed to fetch images');
      }
    } catch (error) {
      message.error('Error fetching images');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Upload new image
  const handleUpload = async (values: any) => {
    if (fileList.length === 0) {
      message.warning('Please select an image to upload');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', fileList[0].originFileObj as File);
      formData.append('title', values.title || '');
      formData.append('description', values.description || '');
      formData.append('tags', values.tags || '');

      const response = await fetch('/api/images', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        message.success('Image uploaded successfully');
        setUploadModalOpen(false);
        form.resetFields();
        clearFiles();
        fetchImages();
      } else {
        message.error(result.error || 'Failed to upload image');
      }
    } catch (error) {
      message.error('Error uploading image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete image
  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: 'Delete Image',
      content: 'Are you sure you want to delete this image?',
      okText: 'Delete',
      okType: 'danger',
      onOk: async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/images/${id}`, {
            method: 'DELETE',
          });

          const result = await response.json();
          if (result.success) {
            message.success('Image deleted successfully');
            fetchImages();
          } else {
            message.error(result.error || 'Failed to delete image');
          }
        } catch (error) {
          message.error('Error deleting image');
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
    });
  };

  // Update image details
  const handleUpdate = async (values: any) => {
    if (!selectedImage) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/images/${selectedImage._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          tags: values.tags ? values.tags.split(',').map((t: string) => t.trim()) : [],
        }),
      });

      const result = await response.json();
      if (result.success) {
        message.success('Image updated successfully');
        setEditModalOpen(false);
        setSelectedImage(null);
        editForm.resetFields();
        fetchImages();
      } else {
        message.error(result.error || 'Failed to update image');
      }
    } catch (error) {
      message.error('Error updating image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const openEditModal = (image: ImageItem) => {
    setSelectedImage(image);
    editForm.setFieldsValue({
      title: image.title,
      description: image.description,
      tags: image.tags?.join(', '),
    });
    setEditModalOpen(true);
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <h1 className="text-2xl font-bold">Image Gallery</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setUploadModalOpen(true)}
        >
          Upload Image
        </Button>
      </Flex>

      <Row gutter={[16, 16]}>
        {images.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={item._id}>
            <Card
              hoverable
              loading={loading}
              cover={
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <AntImage
                    alt={item.title}
                    src={item.imageUrl}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    preview={{
                      mask: (
                        <Flex gap="small">
                          <EyeOutlined /> Preview
                        </Flex>
                      ),
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
                title={item.title || 'Untitled'}
                description={
                  <Flex vertical gap="small" style={{ width: '100%' }}>
                    <div className="text-sm text-gray-500 truncate">
                      {item.description}
                    </div>
                    <div>
                      {item.tags?.map((tag) => (
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.fileSize
                        ? `${(item.fileSize / 1024).toFixed(2)} KB`
                        : 'Unknown size'}
                    </div>
                  </Flex>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Upload Modal */}
      <Modal
        title="Upload New Image"
        open={uploadModalOpen}
        onCancel={() => {
          setUploadModalOpen(false);
          form.resetFields();
          clearFiles();
        }}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleUpload}>
          <Form.Item label="Image">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
              onPreview={handlePreview}
              beforeUpload={() => false}
              maxCount={1}
              accept="image/*"
            >
              {fileList.length === 0 && uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item label="Title" name="title">
            <Input placeholder="Enter image title" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={3} placeholder="Enter image description" />
          </Form.Item>

          <Form.Item label="Tags" name="tags">
            <Input placeholder="Enter tags (comma separated)" />
          </Form.Item>

          <Form.Item>
            <Flex gap="small" justify="flex-end">
              <Button onClick={() => {
                setUploadModalOpen(false);
                form.resetFields();
                clearFiles();
              }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Upload
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Image Details"
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
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 8 }}
              />
            </div>
          )}

          <Form.Item label="Title" name="title">
            <Input placeholder="Enter image title" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={3} placeholder="Enter image description" />
          </Form.Item>

          <Form.Item label="Tags" name="tags">
            <Input placeholder="Enter tags (comma separated)" />
          </Form.Item>

          <Form.Item>
            <Flex gap="small" justify="flex-end">
              <Button onClick={() => {
                setEditModalOpen(false);
                setSelectedImage(null);
                editForm.resetFields();
              }}>
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

export default ImageGallery;
