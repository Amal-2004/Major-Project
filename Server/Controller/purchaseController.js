import Purchase from '../Models/purchase.js'

const purchaseProduct = async (req, res) => {
  try {
    const { customerID, customerName, productID, productName, paymentMode,amount } = req.body
    console.log(customerID, customerName, productID, productName,  paymentMode,amount)
    const newPurchase = new Purchase({
      customerID,
      customerName,
      productID,
      productName,
     paymentMode,
     amount
    })
    //Create new purchase record
    const savedPurchase = await newPurchase.save()
    res.status(201).json(savedPurchase)
    console.log('Purchase Created Successfully')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
const getAllPurchases = async (req, res) => {
  try {
    const allPurchases = await Purchase.find();
    res.json(allPurchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Purchase by Purchased ID
const getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id)
    if (!purchase) {
      return res.status(404).json({ message: 'Purchase not found' })
    }
    res.json(purchase)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// Update by Purchased ID
const updatePurchase = async (req, res) => {
  try {
    const updatedPurchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!updatedPurchase) {
      return res.status(404).json({ message: 'Purchase not found' })
    }
    res.json(updatedPurchase)
    console.log('Purchase Updated Successfully')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//Delete by Purchased ID
const deletePurchase = async (req, res) => {
  try {
    const deletedPurchase = await Purchase.findByIdAndDelete(req.params.id)
    if (!deletedPurchase) {
      return res.status(404).json({ message: 'Purchase not found' })
    }
    res.json({ message: 'Purchase deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default {
  purchaseProduct,
  getPurchaseById,
  updatePurchase,
  deletePurchase,
  getAllPurchases
}
