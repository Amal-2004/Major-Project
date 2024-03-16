
import Feedback from '../Models/feedbackModel.js';

export const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFeedback = async (req, res) => {
  const { name, email, phoneNumber,message, ratings } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, phoneNumber, message,ratings });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
