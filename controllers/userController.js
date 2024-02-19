import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';
import User from './../models/UserSchema.js';

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Faild to update',
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Faild to delete',
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select('-password');

    res.status(200).json({
      success: true,
      message: 'User found',
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');

    res.status(200).json({
      success: true,
      message: 'Users found',
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Users not found',
    });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select('-password');

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    //const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: 'Users found',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    //step-1 appointments from booking
    const bookings = await Booking.find({ user: req.userId });

    //step-2 get doctor id from appointments
    const doctorIds = bookings.map((el) => el.doctor.id);

    //step-3 get doctor info by doctId
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      '-password'
    );

    res.status(200).json({
      success: true,
      message: 'Appointment are getting',
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
