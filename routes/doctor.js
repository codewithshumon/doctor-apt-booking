import express from 'express';

import {
  deleteDoctor,
  getAllDoctors,
  getDoctorProfile,
  getSingleDoctor,
  updateDoctor,
} from '../controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRoute from './review.js';
import bookingRoute from './booking.js';

const router = express.Router();

//nested route
router.use('/:doctorId/review', reviewRoute);
router.use('/:doctorId/booking', bookingRoute);
//we need had to do that if we use that in express.Router({ mergeParams: true })
//router.use('/:doctorId/review', authenticate, restrict, reviewRoute);

router.get('/', getAllDoctors);
router.get('/:id', getSingleDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

export default router;
