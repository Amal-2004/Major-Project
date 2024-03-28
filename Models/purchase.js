import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  doorNo: { type: String, required: true },
  area: { type: String, required: true },
  landmark: { type: String, required: true },
  city: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  pinCode: { type: Number, required: true },
  orderID: { type: String, required: true },
  paymentID: { type: String, required: true },
  productName: { type: String, required: true },
  productModel:{type:String,require:true},
  quantity: { type: String, required: true },
  amount: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
