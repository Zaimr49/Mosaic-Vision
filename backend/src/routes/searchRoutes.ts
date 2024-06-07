import express from 'express';
import { searchStocks } from '../controllers/searchController';

const router = express.Router();

router.get('/', searchStocks);

export default router;
