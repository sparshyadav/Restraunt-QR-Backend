import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { createNewMenuItem } from '../controllers/menu.controller.js';

const router = express.Router();

router.post('/create/:restaurantId', isAuthenticated, createNewMenuItem);

export default router;