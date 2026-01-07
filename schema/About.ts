import mongoose, { Schema, Document } from 'mongoose';

export interface ITeamMember extends Document {
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

const TeamMemberSchema = new Schema<ITeamMember>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      default: '#',
    },
    twitter: {
      type: String,
      default: '#',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const TeamMember = mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);
