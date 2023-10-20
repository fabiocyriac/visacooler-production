import express from 'express';
const router = express.Router();
import { getUsers, deleteUser, updateUsers, getUserDetails } from '../controllers/userController.js';

router.route('/').get(getUsers);
router.route('/:id').get(getUserDetails);
router.route('/:id').patch(updateUsers);
router.route('/:id').delete(deleteUser);

export default router;
