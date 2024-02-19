/* eslint-disable no-undef */
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import doctorRoute from './routes/doctor.js';
import reviewRoute from './routes/review.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: ['https://shumon-mern-doctor.vercel.app'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
);

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('MongoDB database is connected');
  } catch (error) {
    console.log(`MongoDB database connection failed: ${error}`);
  }
};

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('API is working');
});

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  next();
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/doctor', doctorRoute);
app.use('/api/v1/review', reviewRoute);
