import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (event,id,stock) => {
  let cartProducts = getCartProductFromLS();

   let filterData = cartProducts.filter((curProd) => curProd.id !== id);

  localStorage.setItem("cartProductLS", JSON.stringify(filterData));

  // to remove the div element with the corresponding id
  let removeDivElement = document.getElementById(`card${id}`);
  if (removeDivElement) {
    removeDivElement.remove(); 
    // Show Toast hen Product Added to the cart
    showToast("delete", id);
  }
//  TO Update the cart value on the cartPage immediately
  updateCartValue(filterData);

 updateCartProductTotal(filterData);


};
