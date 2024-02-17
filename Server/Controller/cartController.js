import cart from '../Models/cartModel.js'

const cartProduct = async (req, res) => {
  try {
    console.log(455)
    const { customerID, productID } = req.body

    const newcart = new cart({
      customerID,
      productID,
    })
    const savedcart = await newcart.save()

    res.status(201).json(savedcart)
    console.log('cart Created Successfully')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
// Get a wishlist by ID
const getcartById = async (req, res) => {
  try {
    const cart = await cart.findById(req.params.id)
    if (!cart) {
      return res.status(404).json({ message: 'cart not found' })
    }
    res.json(cart)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a cart by ID
const updatecart = async (req, res) => {
  try {
    const updatedcart = await Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!updatedcart) {
      return res.status(404).json({ message: 'Wishlist not found' })
    }

    res.json(updatedcart)
    console.log('cart Updated Successfully')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a cart by ID
const deletecart = async (req, res) => {
  try {
    const deletedcart = await Wishlist.findByIdAndDelete(req.params.id)
    if (!deletedcart) {
      return res.status(404).json({ message: 'cart not found' })
    }

    res.json({ message: 'cart removed successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default {
  cartProduct,
  getcartById,
  updatecart,
  deletecart,
}
