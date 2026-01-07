import { useState } from 'react';
import type { UploadFile } from 'antd';

export interface ImageUploadState {
  fileList: UploadFile[];
  previewImage: string;
  previewOpen: boolean;
}

export const useImageUpload = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  // Handle preview
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  // Handle file change
  const handleChange = ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
    setFileList(newFileList);
  };

  // Clear all files
  const clearFiles = () => {
    setFileList([]);
    setPreviewImage('');
    setPreviewOpen(false);
  };

  // Remove specific file
  const removeFile = (file: UploadFile) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  // Close preview
  const closePreview = () => {
    setPreviewOpen(false);
  };

  return {
    fileList,
    previewImage,
    previewOpen,
    handlePreview,
    handleChange,
    clearFiles,
    removeFile,
    closePreview,
    setFileList,
  };
};

// Helper function to convert file to base64
const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
