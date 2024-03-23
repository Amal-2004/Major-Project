import mongoose from 'mongoose';
import moment from 'moment';

const cartSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  addedDate: { type: Date, default: Date.now },
  addedTime: { type: String },
});

cartSchema.pre('save', function (next) {
  const currentDateTime = moment();
  this.addedDate = currentDateTime.format('YYYY-MM-DD');
  this.addedTime = currentDateTime.format('HH:mm:ss');
  next();
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
