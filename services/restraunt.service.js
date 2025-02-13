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
