import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryImage extends Document {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryImageSchema = new Schema<IGalleryImage>(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const GalleryImage = mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema);
