import { createNewMenuItemService } from "../services/menu.service.js";

export const createNewMenuItem = async (req, res) => {
    try {
        let menuItem = await createNewMenuItemService(req.user, req.body, req.params.restaurantId);
        res.status(201).json({
            code: 201,
            menuItem: menuItem,
            message: "New Menu Item Created Successfully"
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