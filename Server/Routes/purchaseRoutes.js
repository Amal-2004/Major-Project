import express from 'express'
const router = express.Router()
import purchaseController from '../Controller/purchaseController.js'
// Purchase CRUD routes
router.post('/purchase', purchaseController.purchaseProduct);//Purchasing New
router.get('/purchase/:id', purchaseController.getPurchaseById);// Purchase Get as seperate
router.put('/purchase/:id', purchaseController.updatePurchase);// Update Purchase details
router.delete('/purchase/:id', purchaseController.deletePurchase);// Delete
export default router