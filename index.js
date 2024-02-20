/* eslint-disable no-undef */
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import doctorRoute from './routes/doctor.js';
import reviewRoute from './routes/review.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: true, //['https://shumon-mern-doctor.vercel.app']
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    // credentials: true,
  })
);

//THIS IS THE PROBLEM ""THIS IS ONLY NEED IF WE HOST FONTEND AND BACKEND IN THE SAME HOSTING
// Problem is when after deploying the app on vercel or netlify  I try to navigate the route then it's working but when refresh the page then it's shwoing the page not found
// When you refresh the page on a route other than the root route ("/"), the server doesn't recognize the route because it's expecting a different server-side route. This results in a "page not found" error

// const _dirname = path.resolve();

// // Serve static files from the build folder
// app.use(express.static(path.join(_dirname, 'dist')));

// // Define a wildcard route that serves index.html for all routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(_dirname, 'dist', 'index.html'));
// });
//THIS IS THE PROBLEM

//Object Data Modeling (ODM) library for MongoDB and Node.js, to disable strict mode for queries.
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

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/doctor', doctorRoute);
app.use('/api/v1/review', reviewRoute);
