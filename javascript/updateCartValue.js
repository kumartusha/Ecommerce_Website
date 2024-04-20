const cartValue = document.querySelector("#cartValue");
export const updateCartValue = (cartProducts) => {
//  CartProducts contain the Local Storage data in the form of the array of object.
   return cartValue.innerHTML = `<i class="fas fa-shopping-cart">${cartProducts.length}</i>`;

}