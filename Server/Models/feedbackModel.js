
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;