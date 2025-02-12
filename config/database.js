import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);

        console.log('MongoDB Connected Successfully')
    }
    catch (error) {
        console.log('MongoDB Connection Failed: ', error.message);
    }
}