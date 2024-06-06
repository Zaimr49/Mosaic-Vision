import express from 'express';
import { signupFunction, loginFunction, checkMiddlewareAuth } from '../controllers/adminController';
import authentication from '../middleware/authentication';

const router = express.Router();

router.route('/signup').post(signupFunction);
router.route('/login').post(loginFunction);

router.route('/check-middleware-auth').get(authentication,checkMiddlewareAuth);

export default router;
