import express from 'express'
import { sendNewsletter, getAllNewsletter } from '../Controller/newsletter.js'
const router = express.Router()
router.post('/newsletter', sendNewsletter);
router.get('/newsletter', getAllNewsletter);

export default router
