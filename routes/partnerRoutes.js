import express from 'express';
const router = express.Router();

import { createPartner, deletePartner, getAllPartners, getPartnerDetails, updatePartner } from '../controllers/partnerController.js';

router.route('/').post(createPartner).get(getAllPartners);
router.route('/:id').get(getPartnerDetails);
router.route('/:id').delete(deletePartner);
router.route('/:id').patch(updatePartner);

export default router;
