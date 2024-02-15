import Booking from '../models/BookingSchema.js';
import Doctor from './../models/DoctorSchema.js';

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updateDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Faild to update',
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

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

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate('reviews')
      .select('-password');

    res.status(200).json({
      success: true,
      message: 'Doctor found',
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Doctor not found',
    });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    let doctors;
    const { query } = req.query;

    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { specialization: { $regex: query, $options: 'i' } },
        ],
      }).select('-password');
    } else {
      doctors = await Doctor.find({ isApproved: 'approved' }).select(
        '-password'
      );
    }

    res.status(200).json({
      success: true,
      message: 'Doctors found',
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Doctors not found',
    });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId).select('-password');

    if (!doctor) {
      res.status(404).json({
        success: false,
        message: 'Doctor not found',
      });
    }

    //const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: 'Doctors found',
      data: { doctor, appointments },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
