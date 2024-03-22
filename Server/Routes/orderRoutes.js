import express from 'express';
import { createOrder } from '../Controller/orderController.js';

const router = express.Router();

router.post('/order', createOrder);

export default router;
