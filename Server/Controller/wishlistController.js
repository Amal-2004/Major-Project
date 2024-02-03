import Wishlist from '../Models/wishlistModal.js';

// Create a new wishlist
const wishlistProduct = async (req, res) => {
  try {
    console.log(455);
    const { customerID, productID } = req.body;

    // Create a new Wishlist instance
    const newWishlist = new Wishlist({
      customerID,
      productID,
    });

    // Save the new wishlist to the database
    const savedWishlist = await newWishlist.save();

    // Respond with the saved wishlist
    res.status(201).json(savedWishlist);
    console.log('Wishlist Created Successfully');
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }
};

// Get a wishlist by ID
const getWishlistById = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);
    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a wishlist by ID
const updateWishlist = async (req, res) => {
  try {
    const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedWishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    res.json(updatedWishlist);
    console.log('Wishlist Updated Successfully');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a wishlist by ID
const deleteWishlist = async (req, res) => {
  try {
    const deletedWishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (!deletedWishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    res.json({ message: 'Wishlist deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  wishlistProduct,
  getWishlistById,
  updateWishlist,
  deleteWishlist,
};
