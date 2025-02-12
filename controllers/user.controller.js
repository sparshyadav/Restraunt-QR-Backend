import { registerUserService } from "../services/user.service.js";

export const registerUser = async (req, res) => {
    try {
        let data = await registerUserService(req.body);
        res.status(201).json({
            code: 201,
            data: data,
            message: "New User Created Successfully"
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
