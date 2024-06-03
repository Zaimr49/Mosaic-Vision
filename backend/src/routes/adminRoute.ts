import express from 'express';
import { signupFunction, loginFunction } from '../controllers/adminController';

const router = express.Router();

router.post('/signup', signupFunction);
router.post('/login', loginFunction);

export default router;
