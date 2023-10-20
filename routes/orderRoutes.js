import express from 'express';
const router = express.Router();
import { getOrders, createOrder, updateOrder, getOrderDetails,  deleteOrder} from '../controllers/orderController.js';

router.route('/').get(getOrders);
router.route('/').post(createOrder)
router.route('/').patch(updateOrder);
router.route('/:id').get(getOrderDetails);
router.route('/:id').delete(deleteOrder);

export default router;
