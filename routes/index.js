import express from 'express';
import userRoutes from './user.route.js'
import restaurantRoutes from './restraunt.route.js'
import menuRoutes from './menu.route.js'

const router=express.Router();

const routes=()=>{
    router.get('/', (req, res)=>{
        res.json("WELCOME");
    });
    router.use('/users', userRoutes);
    router.use('/restraunt', restaurantRoutes);
    router.use('/menu', menuRoutes);

    return router
}

export default routes 