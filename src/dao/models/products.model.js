import mongoose from "mongoose";
const productCollection = "products"
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    thumbnail: {
        type: String,
        require: false
    },
    code: {
        type: String,
        unique: true,
        require: true
    },
    category: {
        type: String,
        require: false
    },
    status: {
        type: Boolean,
        require: true
    },
})

export const productModel = mongoose.model(productCollection, productSchema)