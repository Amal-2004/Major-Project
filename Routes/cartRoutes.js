import express from 'express';
import cartController from '../Controller/cartController.js';

const router = express.Router();

router.get('/:id', cartController.getCartById);
router.post('/', cartController.cartProduct);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

export default router;
