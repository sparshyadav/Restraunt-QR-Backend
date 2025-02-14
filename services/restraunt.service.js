import { generateQRCode } from '../config/qrCode.js';
import Restraunt from '../models/restraunt.model.js';

export const createRestaurantService = async (user, body) => {
    try {
        const { name, address, phone } = body;

        if (!user || (user.role !== 'owner' && user.role !== 'admin')) {
            throw { code: 403, message: 'Only Owners and Admins can create restaurants' };
        }

        const restaurant = await Restraunt.create({
            name, address, phone, owner: user.userId
        });

        restaurant.qrCode = await generateQRCode(restaurant._id);
        await restaurant.save();

        return restaurant;
    } catch (error) {
        console.log('Error in createRestrauntService:', error.message)
        throw error;
    }
};

export const getRestaurantsService = async (user) => {
    try {
        let userId = user.userId;

        let restaurants = await Restraunt.find({ owner: userId });
        if (!restaurants) {
            throw { code: 404, message: 'No Restraurants Found' };
        }

        return restaurants;
    }
    catch (error) {
        console.log('Error in createRestrauntService:', error.message)
        throw error;
    }
}

export const getMenuService = async (restaurantId) => {
    try {
        let restaurant = await Restraunt.findOne({ _id: restaurantId }).populate('menu');

        if (!restaurant) {
            throw { code: 404, message: 'No Restaurant Found' };
        }

        return restaurant.menu;
    } catch (error) {
        console.error('Error in getMenuService:', error.message);
        throw error;
    }
};
