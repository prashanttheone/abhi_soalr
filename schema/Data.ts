import mongoose from 'mongoose';

// Generic Data Schema
const DataSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    metadata: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export const Data = mongoose.models.Data || mongoose.model('Data', DataSchema);
