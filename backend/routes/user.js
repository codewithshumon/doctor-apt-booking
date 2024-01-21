import express from 'express';

import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
