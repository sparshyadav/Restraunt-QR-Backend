import mongoose, { mongo } from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Menu Item Name is Required"]
    },
    description: {
        type: String,
        optional: true
    },
    price: {
        type: Number,
        required: [true, "Price is Required"]
    },
    category: {
        type: String,
        enum: ["Appetizer", "Main Course", "Dessert", "Beverage", "Extras"],
        required: [true, "Category is Required"]
    }
}, { timestamps: true });

export default mongoose.model('MenuItem', menuItemSchema);
