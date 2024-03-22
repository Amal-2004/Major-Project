import express from 'express';
import { getAllData, createData } from '../Controller/addressController.js';

const router = express.Router();

router.get('/address', getAllData);
router.post('/address', createData);


export default router;
