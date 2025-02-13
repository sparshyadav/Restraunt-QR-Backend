import express from 'express';
import { registerUser, loginUser } from '../controllers/user.controller.js';
import { newUserValidator } from '../validator/user.validator.js';

const router = express.Router();

router.post('/register', newUserValidator, registerUser);
router.post('/login', loginUser);


export default router;