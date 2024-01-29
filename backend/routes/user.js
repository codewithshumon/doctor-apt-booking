import express from 'express';

import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/', authenticate, getAllUsers);
router.get('/:id', authenticate, restrict(['admin']), getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
