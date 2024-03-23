import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
