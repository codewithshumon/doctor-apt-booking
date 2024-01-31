import express from 'express';

import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/', authenticate, restrict(['doctor']), getAllUsers);
router.get('/:id', authenticate, restrict(['doctor']), getSingleUser);
router.put('/:id', authenticate, restrict(['doctor']), updateUser);
router.delete('/:id', authenticate, restrict(['doctor']), deleteUser);

export default router;
