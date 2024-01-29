import express from 'express';

import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js';
import { authenticate } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/', authenticate, getAllUsers);
router.get('/:id', authenticate, getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
