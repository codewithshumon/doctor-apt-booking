/* eslint-disable no-undef */
import Jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
  //get token from headers
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith('Bearer ')) {
    //if we do not use return here. get error Cannot set headers after they are sent
    return res
      .status(401)
      .json({ success: false, message: 'Authorization denied' });
  }

  try {
    const token = authToken.split(' ')[1];

    //verify token
    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token is expired' });
    }

    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  //this req.userId from "authenticate > req.userId = decoded.id'
  const userId = req.userId;
  let user;

  console.log('[restrict req.userId]', req.userId);

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  console.log('[req.parmas]', req.params);
  console.log('[userId]', userId);
  console.log('[patient]', patient);
  console.log('[doctor]', doctor);

  if (patient) {
    user = patient;
  }

  if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: 'You are not authorized' });
  }

  next();
};

// export const restrict = (roles) => async (req, res, next) => {
//   const userId = req.userId;
//   let user;

//   console.log('[restrict req.userId]', req.userId);

//   try {
//     const patient = await User.findById(userId);
//     const doctor = await Doctor.findById(userId);

//     if (patient) {
//       user = patient;
//     }

//     if (doctor) {
//       user = doctor;
//     }

//     // if (!patient || !doctor) {
//     //   return res
//     //     .status(401)
//     //     .json({ success: false, message: 'User not found' });
//     // }

//     // const user = patient || doctor;

//     if (!user.role || !roles.includes(user.role)) {
//       return res
//         .status(401)
//         .json({ success: false, message: 'You are not authorized' });
//     }

//     next();
//   } catch (error) {
//     console.error('Error retrieving user:', error);
//     return res
//       .status(500)
//       .json({ success: false, message: 'Internal Server Error' });
//   }
// };
