import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/database.js';

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server Started at PORT: ${PORT}`);
})