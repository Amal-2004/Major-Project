import express from 'express';
const router = express.Router();
import wishlistController from '../Controller/wishlistController.js';

router.get('/:id', wishlistController.getWishlistById)
router.post('/', wishlistController.wishlistProduct)
router.put('/:id', wishlistController.updateWishlist);
router.delete('/:id', wishlistController.deleteWishlist);

export default router;

  