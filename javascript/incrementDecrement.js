import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");

export const incrementDecrement = (event,id,stock,price) => {

    const currentCardElement = document.querySelector(`#card${id}`);
    // Return the whole card data mapping with the id on the click event

    const productQuantity = currentCardElement.querySelector('.productQuantity');
    // Return the productQuantity class Container to update the quantity

    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();

    let existingProduct = localCartProducts.find((curProd) => curProd.id === id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;

    }else{
        localStoragePrice = price;
        price = price;
    }


    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            ++quantity;
        }else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }
    
    //  For Decrement the value of the cartDecrement..
    if(event.target.className === 'cartDecrement'){
       if(quantity > 1){
        --quantity;
       }
    }


    // finally we update the actual local storage price
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id,quantity,price:localStoragePrice};
        updatedCart = localCartProducts.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        })
    
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
     productQuantity.textContent = quantity;
     productPrice.textContent = `$${localStoragePrice}`;

    //   For live update the total Data..
     updateCartProductTotal();
     

};