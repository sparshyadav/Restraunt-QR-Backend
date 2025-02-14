import Restraunt from '../models/restraunt.model.js';
import MenuItem from '../models/menuItem.model.js';
import User from '../models/user.model.js';

export const createNewMenuItemService = async (user, body, restaurantId) => {
    try {
        let restaurant = await Restraunt.findOne({ _id: restaurantId });

        if (!restaurant) {
            throw {
                code: 404,
                message: 'Restaurant not found'
            };
        }

        if (user.userId !== restaurant.owner.toString()) {
            throw {
                code: 403,
                message: 'Only Owners can Add Items in Menu Restaurants'
            };
        }

        let { name, description, price, category } = body;

        let menuItem = await MenuItem.create({ name, description, price, category });

        restaurant.menu.push(menuItem._id);
        await restaurant.save();

        return menuItem;
    } catch (error) {
        console.error('Error in createNewMenuItemService:', error.message);
        throw error;
    }
};
