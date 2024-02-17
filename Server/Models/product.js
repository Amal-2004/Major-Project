// models/product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productModel:{type:String,required:true},
  productPrice: { type: Number, required: true },
  description: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);
export default Product
