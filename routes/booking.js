import express from 'express';

import { authenticate, restrict } from '../auth/verifyToken.js';
import {
  createBooking,
  getAllBooking,
} from '../controllers/bookingController.js';

const router = express.Router({ mergeParams: true });
//"mergeParams: true" use to marge route with doctor route

//we need to put "authenticate and restrict middlware" where we put { mergeParams: true }
router
  .route('/')
  .get(getAllBooking)
  .post(authenticate, restrict(['patient']), createBooking);

// Diffrant way to do that
// router.get('/', getAllReviews);
// router.put('/', authenticate, restrict(['patient']), createReview);

export default router;
