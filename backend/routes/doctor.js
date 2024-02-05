import express from 'express';

import {
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
} from '../controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRoute from './review.js';

const router = express.Router();

//nested route
router.use('/:doctorId/review', reviewRoute);
//we need had to do that if we use that in express.Router({ mergeParams: true })
//router.use('/:doctorId/review', authenticate, restrict, reviewRoute);

router.get('/', authenticate, getAllDoctors);
router.get('/:id', authenticate, restrict(['patient']), getSingleDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;
