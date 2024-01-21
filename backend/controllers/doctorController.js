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
    const doctor = await Doctor.findById(id).select('-password');

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
    const doctors = await Doctor.find({}).select('-password');

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
