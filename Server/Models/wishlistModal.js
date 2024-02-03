// Models/wishlistModal.js
import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  addedDate: { type: Date, default: Date.now },
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema); // Correct model name

export default Wishlist;
