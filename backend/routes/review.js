import express from 'express';

import {
  getAllReviews,
  createReview,
} from '../controllers/reviewController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(authenticate, restrict(['patient']), createReview);

// Diffrant way to do that
// router.get('/', getAllReviews);
// router.put('/', authenticate, restrict(['patient']), createReview);

export default router;
