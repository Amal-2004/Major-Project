import mongoose from 'mongoose'
import moment from 'moment'

const wishlistSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  addedDate: { type: Date, default: Date.now },
  addedTime: { type: String },
})

wishlistSchema.pre('save', function (next) {
  const currentDateTime = moment()
  this.addedDate = currentDateTime.format('YYYY-MM-DD')
  this.addedTime = currentDateTime.format('HH:mm:ss')
  next()
})

const Wishlist = mongoose.model('Wishlist', wishlistSchema)

export default Wishlist;
