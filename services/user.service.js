import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const registerUserService = async (body) => {
    try {
        let { name, email, phone, password } = body;

        let user = await User.findOne({ email });
        if (user) {
            const error = new Error('User Already Exists, Please Try Again with a New Email');
            error.code = 401;
            throw error;
        }

        user = await User.findOne({ phone });
        if (user) {
            const error = new Error('User Already Exists, Pleasy Try Again with a New Phone Number');
            error.code = 401;
            throw error;
        }

        let hashedPassword=await bcrypt.hash(password, 10);
        user=await User.create({
            name, email, phone, password: hashedPassword
        });

        return user;
    }
    catch (error) {
        console.log('Error in registerUserService:', error.message)
        throw error;
    }
}