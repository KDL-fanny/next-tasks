// src/utils/database.tsx
import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || '')
    } catch (error) {
        console.log('DB接続に失敗しました');
        throw new Error();
    }
}