import { createRestaurantService, getRestaurantsService, getMenuService } from "../services/restraunt.service.js";


export const createRestraunt = async (req, res) => {
    try {
        let restraunt = await createRestaurantService(req.user, req.body);
        res.status(201).json({
            code: 201,
            restraunt: restraunt,
            message: "New Restraunt Created Successfully"
        });
    }
    catch (error) {
        const statusCode = error.code || 500;

        res.status(statusCode).json({
            code: statusCode,
            message: error.message || 'An Unexpected Error Occurred'
        });
    }
}

export const getOwnerRestraunts = async (req, res) => {
    try {
        let restaurants = await getRestaurantsService(req.user);
        res.status(201).json({
            code: 201,
            restaurants: restaurants,
            message: "New Restraunt Created Successfully"
        });
    }
    catch (error) {
        const statusCode = error.code || 500;

        res.status(statusCode).json({
            code: statusCode,
            message: error.message || 'An Unexpected Error Occurred'
        });
    }
}

export const getMenu = async (req, res) => {
    try {
        let restaurant = await getMenuService(req.params.restaurantId);
        res.status(201).json({
            code: 201,
            restaurant: restaurant,
            message: "Restaurant Menu Sent Successfully"
        });
    }
    catch (error) {
        const statusCode = error.code || 500;

        res.status(statusCode).json({
            code: statusCode,
            message: error.message || 'An Unexpected Error Occurred'
        });
    }
}