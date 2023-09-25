import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  showStats,
} from '../controllers/publicController.js';

import testUser from '../middleware/testUser.js';

router.route('/').get(getAllProducts);
// remember about :id
router.route('/stats').get(showStats);

export default router;
