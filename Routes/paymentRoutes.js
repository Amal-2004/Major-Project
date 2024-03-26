import express from 'express';
const router = express.Router();
import createPayment  from '../Controller/paymentController.js';

// Route to handle payment creation
router.post('/payment', createPayment);

export default router;
