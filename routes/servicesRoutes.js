import express from 'express';
const router = express.Router();

import {
  createService,
  deleteService,
  getAllServices,
  getServiceDetails,
  editService,
  showStats,
} from '../controllers/ServicesController.js';

import testUser from '../middleware/testUser.js';

router.route('/').post(testUser, createService).get(getAllServices);
router.route('/:id').get(getServiceDetails);
router.route('/:id').delete(testUser, deleteService).patch(testUser, editService);
router.route('/stats').get(showStats);


export default router;
