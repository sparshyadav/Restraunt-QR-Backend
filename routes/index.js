import express from 'express';
import userRoutes from './user.route.js'

const router=express.Router();

const routes=()=>{
    router.get('/', (req, res)=>{
        res.json("WELCOME");
    });
    router.use('/users', userRoutes);

    return router
}

export default routes 