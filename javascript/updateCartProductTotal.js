//  For Updating the total Value on the add to Cart Page...

import { getCartProductFromLS } from "./getCartProductFromLS.js"


export const updateCartProductTotal = () => {
let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");


   let localCartProducts = getCartProductFromLS();  // Return an array Of object..
   

let totalProductPrice = localCartProducts.reduce((accumulator,curProd) =>  accumulator + curProd.price,0)

productSubTotal.textContent = "$"+Number((totalProductPrice).toFixed(2));
productFinalTotal.textContent = `$${(totalProductPrice + 50).toFixed(2)}`;



}