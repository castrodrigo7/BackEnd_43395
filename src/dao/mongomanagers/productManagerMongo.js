import { productModel } from "../models/products.model";

export default class ProductManager{

    getProducts = async () => {
        try {
            return await productModel.find().lean();
        } catch (error) {
            return error
        }
    }

    getProductById = async (id) => {
        try {
            return await productModel.findById(id)
        } catch (err) {
            return {error: err.message}
        }
    }

    addProduct = async (product) => {
        try {
            await productModel.create(product);
            return await productModel.findOne({ title: product.title })
        } catch (error) {
            return error
        }
    }

    uptateProduct = async (id, product) => {
        try {
            return await productModel.findByIdAndUpdate(id, { $set: product });
        } catch (error) {
            return error
        }
    }

    deleteProduct = async (id) => {
        try {
            return await productModel.findOneAndDelete(id);
        } catch (error) {
            return error
        }
    }
}