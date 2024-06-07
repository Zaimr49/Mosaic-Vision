import express from 'express';
import { signupFunction, loginFunction, checkMiddlewareAuth } from '../controllers/adminController';
import authentication from '../middleware/authentication';
import subCategoryRoutes from './adminSubcategoryRoute';
import stockRoutes from './adminStockRoute';

const router = express.Router();

router.post('/signup', signupFunction);
router.post('/login', loginFunction);

// Apply authentication middleware for all subsequent routes
router.use(authentication);

router.get('/check-middleware-auth', checkMiddlewareAuth);
router.use('/subcategories', subCategoryRoutes);
router.use('/stocks', stockRoutes);

export default router;
