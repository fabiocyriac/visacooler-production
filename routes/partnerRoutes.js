import express from 'express';
const router = express.Router();

import {
  createPartner,
  deletePartner,
  getAllPartners,
  updatePartner,
} from '../controllers/partnerController.js';

import testUser from '../middleware/testUser.js';

router.route('/').post(testUser, createPartner).get(getAllPartners);
// remember about :id
router.route('/:id').delete(testUser, deletePartner).patch(testUser, updatePartner);

export default router;
