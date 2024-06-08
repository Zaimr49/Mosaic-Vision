import express from 'express';
import { submitQuote } from '../controllers/quoteController'; 

const router = express.Router();

router.post('/submit-quote', submitQuote);

export default router;
