import mongoose from 'mongoose';

// Form Details Schema
const FormDetailsSchema = new mongoose.Schema({
    formType: {
        type: String,
        required: true,
    },
    fields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
    },
    status: {
        type: String,
        enum: ['pending', 'submitted', 'approved', 'rejected'],
        default: 'pending',
    },
    submittedAt: {
        type: Date,
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

export const FormDetails = mongoose.models.FormDetails || mongoose.model('FormDetails', FormDetailsSchema);
