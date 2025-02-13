import express from 'express';
// import { isAdmin } from '../middlewares/isAdmin.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { createRestraunt } from '../controllers/restraunt.controller.js';

const router = express.Router();

router.post('/create', isAuthenticated, createRestraunt);

export default router;