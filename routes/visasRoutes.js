import express from 'express';
const router = express.Router();

import {
  createVisa,
  deleteVisa,
  getAllVisas,
  updateVisa,
  showStats,
} from '../controllers/visasController.js';

import testUser from '../middleware/testUser.js';

router.route('/').post(testUser, createVisa).get(getAllVisas);
// remember about :id
router.route('/stats').get(showStats);
router.route('/:id').delete(testUser, deleteVisa).patch(testUser, updateVisa);

export default router;
