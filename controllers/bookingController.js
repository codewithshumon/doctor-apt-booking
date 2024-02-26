import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const getAllBooking = async (req, res) => {
  const id = req.userId;

  try {
    const bookings = await Booking.find({
      $or: [{ user: id }, { doctor: id }],
    })
      .populate('doctor', ['name', 'photo', 'specialization', 'ticketPrice'])
      .populate('user', ['name', 'photo']);

    console.log('bookings', bookings);
    console.log('id', id);

    res
      .status(200)
      .json({ success: true, message: 'Successful', data: bookings });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: 'Not found' });
  }
};

export const deleteBooking = async (req, res) => {
  const id = req.params.id;
  const userId = req.params.userId;
  const doctorId = req.params.doctorId;

  console.log('req.params.id', req.params.id);

  try {
    const deletedBooking = await Booking.findOneAndDelete({ _id: id });

    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    await Doctor.findByIdAndUpdate(
      doctorId,
      { $pull: { bookings: id } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      userId,
      { $pull: { bookings: id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
      deletedBooking,
    });
  } catch (error) {
    console.log('deleteBooking', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete',
    });
  }
};

export const createBooking = async (req, res) => {
  // Extract fields from req.body directly
  const { name, phone, age, gender, date, time, note } = req.body;

  // Additional data from request parameters
  const { doctorId } = req.params;
  const userId = req.userId;

  // Create a new Booking object
  const newBooking = new Booking({
    name,
    phone,
    age,
    gender,
    date,
    time,
    note,
    doctor: doctorId, // Assign the doctor ID from the request parameters
    user: userId, // Assign the user ID from the request
  });

  try {
    // Save the new booking
    const savedBooking = await newBooking.save();

    // Update doctor's and user's bookings arrays
    await Doctor.findByIdAndUpdate(doctorId, {
      $push: { bookings: savedBooking._id },
    });
    await User.findByIdAndUpdate(userId, {
      $push: { bookings: savedBooking._id },
    });

    // Respond with success message and the saved booking data
    res.status(200).json({
      success: true,
      message: 'Booking submitted',
      data: savedBooking,
    });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
