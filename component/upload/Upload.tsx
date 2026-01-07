'use client';

import React from 'react';
import { Upload, Button, Modal, Flex } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { useImageUpload } from '@/hooks/upload';

interface ImageUploadComponentProps {
  maxCount?: number;
  multiple?: boolean;
  onUploadComplete?: (files: UploadFile[]) => void;
}

const ImageUploadComponent: React.FC<ImageUploadComponentProps> = ({
  maxCount = 5,
  multiple = true,
  onUploadComplete,
}) => {
  const {
    fileList,
    previewImage,
    previewOpen,
    handlePreview,
    handleChange,
    clearFiles,
    closePreview,
  } = useImageUpload();

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const beforeUpload: UploadProps['beforeUpload'] = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      Modal.error({
        title: 'Invalid File Type',
        content: 'You can only upload image files!',
      });
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      Modal.error({
        title: 'File Too Large',
        content: 'Image must be smaller than 5MB!',
      });
    }
    return false; // Prevent auto upload
  };

  const handleClear = () => {
    Modal.confirm({
      title: 'Clear All Images',
      content: 'Are you sure you want to remove all uploaded images?',
      onOk: () => {
        clearFiles();
      },
    });
  };

  return (
    <div className="w-full">
      <Flex vertical gap="large" className="w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Image Upload</h3>
          {fileList.length > 0 && (
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={handleClear}
            >
              Clear All
            </Button>
          )}
        </div>

        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={beforeUpload}
          multiple={multiple}
          maxCount={maxCount}
          accept="image/*"
        >
          {fileList.length >= maxCount ? null : uploadButton}
        </Upload>

        <Modal
          open={previewOpen}
          title="Image Preview"
          footer={null}
          onCancel={closePreview}
          width={800}
        >
          <img
            alt="preview"
            style={{ width: '100%' }}
            src={previewImage}
          />
        </Modal>

        {fileList.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">Uploaded Files:</h4>
            <ul className="list-disc list-inside">
              {fileList.map((file) => (
                <li key={file.uid} className="text-sm text-gray-600">
                  {file.name} - {((file.size || 0) / 1024).toFixed(2)} KB
                </li>
              ))}
            </ul>
          </div>
        )}
      </Flex>
    </div>
  );
};

export default ImageUploadComponent;
