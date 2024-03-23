import express from 'express';
import { adminLogin } from './adminLoginController.js';

const router = express.Router();

router.post('/login', adminLogin);

export default router;
