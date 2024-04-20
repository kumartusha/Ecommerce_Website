import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";


getCartProductFromLS();     // This method call bydefault dont need to run after click on the cart (For Update value ByDefault of Cart)

export const addToCart = (event,id,stock) => {


    //  Adding into the local storage of card values
    //  Whenever this function will be called the data fetch from the local storage into array of object format
    let arrLocalStorageProduct = getCartProductFromLS();
    // console.log(arrLocalStorageProduct);

    const currentProductElement = document.querySelector(`#card${id}`);
    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    let price = currentProductElement.querySelector(".productPrice").innerText;
    
    //  Updating the price according to the quantity
    price = price.replace("$", "");
    
    //  Find the existing products and also reduce the redundency from Local Storage
    let existingProd = arrLocalStorageProduct.find( items => items.id === id);   // Find function returns single value it may be true or false value
    console.log(existingProd);  // Contain Object 
   
    // let existingProd = arrLocalStorageProduct.reduce((_,currentElement) => currentElement.id === id);
    // console.log(existingProd);


     
    // Check if the same id product present into LocalStorage then simply increase the number of quantity and the price according to the quantity
    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        console.log(quantity);
        price  = Number(price * quantity);
        let updatedCart = {id,quantity,price};
        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        })
        console.log(quantity,price);
        // console.log(quantity,price);
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

        showToast("add", id);
    }

    if(existingProd){
        
        return false;
    }

    price  = Number(price * quantity);
    quantity = Number(quantity);
    //    console.log(quantity,  price);
    
    // let updateCart = {id,quantity,price};
    arrLocalStorageProduct.push({id,quantity,price});            // arrLocalStorageProduct is a Array of Object
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    console.log(arrLocalStorageProduct);
    //  Update the Cart button Value

    
    updateCartValue(arrLocalStorageProduct);         // Call the function with array of object parameter
    
    showToast("add", id);

}