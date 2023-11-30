import express from 'express';
const router = express.Router();
import { getUsers, deleteUser, createUser, updateUsers, getUserDetails } from '../controllers/userController.js';

router.route('/').post(createUser).get(getUsers);
router.route('/:id').get(getUserDetails);
router.route('/:id').patch(updateUsers);
router.route('/:id').delete(deleteUser);

export default router;
