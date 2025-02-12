import Joi from 'joi';

export const newUserValidator = (req, res, next) => {
    const userSchema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({ 'string.pattern.base': 'Phone Number must be Exactly 10 Digits' }),
        role: Joi.string().valid('owner', 'admin').default('owner')
    });

    const { error, value } = userSchema.validate(req.body);

    if (error) {
        console.log('Validation Error: ', error.details[0].message);
        return res.status(400).json({
            code: 400,
            message: error.details[0].message
        })
    }
    else {
        req.body = value;
        next();
    }
}