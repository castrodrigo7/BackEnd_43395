import { cartModel } from "../models/carts.model";

class CartManager {

    getCarts = async () => {
        try {
            const carts = await cartModel.find();
            return carts;
        } catch (error) {
            console.log('Error al obtener los carritos: ', err.message);
            return [];
        }
    }

    getCartById = await (cartId) => {
        
    }
}