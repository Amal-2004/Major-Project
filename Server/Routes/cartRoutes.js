// routes/cartRoutes.js
import express from 'express'
const router = express.Router()
import cartController from '../Controller/cartController.js'

router.get('/:id', cartController.getcartById)
router.post('/', cartController.cartProduct) 
router.put('/:id', cartController.updatecart)
router.delete('/:id', cartController.deletecart)

export default router

