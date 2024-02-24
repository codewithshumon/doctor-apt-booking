import mongoose from 'mongoose';
import Doctor from './DoctorSchema.js';
import User from './UserSchema.js';

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: { type: Number, required: true },
    age: { type: Number, required: true },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
  },
  { timestamps: true }
);

// Define a pre-remove hook to remove the booking ID from doctor and user booking arrays
bookingSchema.pre('remove', async function (next) {
  try {
    // Find the Doctor document associated with this booking and update its bookings array
    await Doctor.findByIdAndUpdate(
      this.doctor,
      { $pull: { bookings: this._id } },
      { new: true }
    );

    // Find the User document associated with this booking and update its bookings array
    await User.findByIdAndUpdate(
      this.user,
      { $pull: { bookings: this._id } },
      { new: true }
    );

    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.model('Booking', bookingSchema);
