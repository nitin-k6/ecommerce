import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);

export default router;

