import { fetchQuantityFromCartLs } from "./fetchQuantityFromCartLs.js";
import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeToCartElement.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

// This file is used for getting the products that present into the LocalStorage and compare with package.Json to get the whole information about the cards bcoz in the LS there mention only the id,quantity,Price

let productCartTemplate = document.querySelector("#productCartTemplate");
let cartElement = document.querySelector("#productCartContainer");

fetch("./api/products.json")
  .then((response) => response.json())
  .then((data) => {
    let cartProducts = getCartProductFromLS();
    // console.log(cartProducts);
    let filterData = data.filter((curProd) => {
      return cartProducts.some((curElement) => curElement.id === curProd.id);
    });

    //    Show Card FUnction for displaying the products cards on the cart Page immediately

    const showCartProduct = () => {
      filterData.forEach((curProd) => {
        //   Destructuring the object
        const { id, brand, name, category, price, stock, description, image } =
          curProd;

        //  Cloning the productCartTemplate into the productCartCOntainer
        let productClone = document.importNode(
          productCartTemplate.content,
          true
        );

        const lsActualData = fetchQuantityFromCartLs(id, price); //Return the price and quantity for the card element on the web page..

        productClone
          .querySelector("#cardValue")
          .setAttribute("id", `card${id}`);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = "Tushar Kumar";
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productQuantity").textContent =
          lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent =
          "$" + lsActualData.price.toFixed(2);

          //  For Update the quantity on the cart Page..
       productClone.querySelector(".stockElement").addEventListener("click", (event) => {
           incrementDecrement(event,id,stock,price);
       });



//  Remove the Element from the addtocart page (Event for every Id);
        productClone
          .querySelector(".remove-to-cart-button")
          .addEventListener("click", (event) => {
            removeProdFromCart(event, id, stock);
          });

        cartElement.append(productClone);
      });
    };
    showCartProduct();

    //  For Updating the Total value regarding all of the item present into the Local Storage

    updateCartProductTotal();

  })
  .catch((error) => {
    console.log("The Error are:- ", error);
  });
