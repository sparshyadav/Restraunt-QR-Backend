import mongoose, { mongo } from "mongoose";

const restrauntSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Restraunt Name is Required"],
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address: {
        type: String,
        required: [true, "Restraunt Address is Required"]
    },
    phone: {
        type: String,
        required: [true, "Restraunt Phone Number is Required"]
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
    }],
    qrCode: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Restraunt", restrauntSchema);