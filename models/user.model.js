import mongoose, { model } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password must be of 6 Characters"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number is Required"],
        unique: true
    },
    role: {
        type: String,
        enum: ["owner", "admin"],
        default: "owner"
    },
    restraunts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restraunt"
    }]
}, { timestamps: true });

export default model('User', userSchema);
