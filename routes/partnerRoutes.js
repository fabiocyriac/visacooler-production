import express from 'express';
const router = express.Router();

import {
  createPartner,
  deletePartner,
  getAllPartners,
  updatePartner,
} from '../controllers/partnerController.js';

router.route('/').get(getAllPartners);
router.route('/register').post(createPartner);
router.route('/update').patch(updatePartner);
router.route('/:id').delete(deletePartner).patch(updatePartner);

export default router;
