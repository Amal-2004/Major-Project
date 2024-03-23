import mongoose from 'mongoose'

const newsletterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Newsletter = mongoose.model('Newsletters', newsletterSchema)
export default Newsletter
