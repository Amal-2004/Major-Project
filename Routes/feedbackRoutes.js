
import express from 'express';
import { getAllFeedback, createFeedback } from '../Controller/feedback.js';

const router = express.Router();

router.get('/feedback', getAllFeedback);
router.post('/feedback', createFeedback);

export default router;
