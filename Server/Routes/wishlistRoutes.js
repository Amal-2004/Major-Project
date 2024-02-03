// routes/wishlistRoutes.js
import express from 'express';
const router = express.Router();
import wishlistController from '../Controller/wishlistController.js';

// Wishlist CRUD routes
//router.get('/', wishlistController.getAllWishlists);
router.get('/:id', wishlistController.getWishlistById); // Correct function name
router.post('/', wishlistController.wishlistProduct); // Correct function name
router.put('/:id', wishlistController.updateWishlist);
router.delete('/:id', wishlistController.deleteWishlist);

export default router;

  