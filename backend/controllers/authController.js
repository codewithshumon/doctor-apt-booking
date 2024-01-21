/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from './../models/UserSchema.js';
import Doctor from './../models/DoctorSchema.js';

export const register = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body;

  try {
    let user = null;

    //find out the user from database
    if (role === 'patient') {
      user = await User.findOne({ email });
    }

    if (role === 'doctor') {
      user = await Doctor.findOne({ email });
    }

    //checking if the user exist
    if (user) {
      console.log('find out the user from database', user);
      return res.status(400).json({ message: 'User already exist' });
    }

    //make the password hash
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === 'patient') {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    if (role === 'doctor') {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: 'User successfully created' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error. Try again later',
    });
  }
};

export const login = async (req, res) => {
  try {
    console.log('loging api');
  } catch (error) {
    console.log('loging api');
  }
};
