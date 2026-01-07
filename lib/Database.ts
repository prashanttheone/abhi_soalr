import mongoose from 'mongoose';

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://28pointgreenenergy_db_user:0BFltTSbApQMODMz@cluster0.5pqeh9b.mongodb.net/?appName=Cluster0';

// Global variable to cache the connection
declare global {
    // eslint-disable-next-line no-var
    var mongoose: {
        conn: typeof import('mongoose') | null;
        promise: Promise<typeof import('mongoose')> | null;
    } | undefined;
}

let cached = global.mongoose ?? { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cached;
}

/**
 * Connect to MongoDB database
 */
export async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
            console.log('✅ MongoDB connected successfully');
            return mongooseInstance;
        }) as Promise<typeof mongoose>;
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

// ============================================
// MONGOOSE MODELS
// ============================================

export * from '@/schema';

