import express from 'express';
// import { isAdmin } from '../middlewares/isAdmin.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { createRestraunt, getOwnerRestraunts, getMenu } from '../controllers/restraunt.controller.js';

const router = express.Router();

router.post('/create', isAuthenticated, createRestraunt);
router.get('/getOwnerRestaurants', isAuthenticated, getOwnerRestraunts);
router.get('/getMenu/:restaurantId', getMenu);

export default router;