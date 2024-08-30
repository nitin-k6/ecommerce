import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/users', authController.getUsers); 
export default router;


