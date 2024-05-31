import express from 'express';
import { testFunction } from '../controllers/testController';

const router = express.Router();

router.route('/test').get(testFunction);

export default router;
