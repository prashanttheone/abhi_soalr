import mongoose, { Schema, Document } from 'mongoose';

export interface IImageData extends Document {
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

const ImageDataSchema = new Schema<IImageData>({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  fileSize: {
    type: Number,
  },
  fileType: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
});

export const ImageData = mongoose.models.ImageData || mongoose.model<IImageData>('ImageData', ImageDataSchema);
