import { getCartProductFromLS } from "./getCartProductFromLS.js";


export const fetchQuantityFromCartLs = (id,price) => {
    let cartProducts = getCartProductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    let quantity = 1;
    if(existingProduct){
    quantity = Number(existingProduct.quantity);
    price = Number(existingProduct.price);

    }

    return { quantity , price };

};