import Cart from '../Models/cartModel.js';

const cartProduct = async (req, res) => {
  try {
    const { customerID, productID } = req.body;

    const newCart = new Cart({
      customerID,
      productID,
    });

    const savedCart = await newCart.save();

    res.status(201).json(savedCart);
    console.log('Cart Created Successfully');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(updatedCart);
    console.log('Cart Updated Successfully');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json({ message: 'Cart removed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  cartProduct,
  getCartById,
  updateCart,
  deleteCart,
};
