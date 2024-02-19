import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

mongoose.set('strictQuery', false);
const connnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('MongoDB databased is connected');
  } catch (error) {
    console.log(`MongoDB databased connection failed: ${error}`);
  }
};

app.listen(port, () => {
  connnectDB();
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.json('API is working');
});

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
