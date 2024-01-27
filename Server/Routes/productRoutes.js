// routes/productRoutes.js
import express from 'express'
const router = express.Router()
import productController from '../Controller/productController.js'

// Product CRUD routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router
