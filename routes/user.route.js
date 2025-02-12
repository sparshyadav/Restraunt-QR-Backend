import express from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { newUserValidator } from '../validator/user.validator.js';

const router = express.Router();

router.post('/register', newUserValidator, registerUser);

export default router;