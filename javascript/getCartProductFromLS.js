import { updateCartValue } from "./updateCartValue.js";


export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductLS");      // Return the data in array of oject format
    if(!cartProducts){
        return [];
    }

    cartProducts = JSON.parse(cartProducts);   // Parse method used to convert string data formation of Local storage into array of object and stringify is the vice versa
    // console.log(cartProducts);
     updateCartValue(cartProducts);       //  CartProducts contain the Local Storage data in the form of the array of object.
    return cartProducts;
}