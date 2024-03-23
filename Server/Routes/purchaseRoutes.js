import express from 'express'
const router = express.Router()
import purchaseController from '../Controller/purchaseController.js'
// Purchase CRUD routes
router.post('/purchase', purchaseController.purchaseProduct)
router.get('/purchase', purchaseController.getAllPurchases)
router.get('/purchase/:id', purchaseController.getPurchaseById)
router.put('/purchase/:id', purchaseController.updatePurchase)
router.delete('/purchase/:id', purchaseController.deletePurchase)
export default router