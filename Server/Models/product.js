// models/product.js
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productRate: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  ratings: { type: Number, default: 0 }
})

const product = mongoose.model('Product', productSchema)
export default product