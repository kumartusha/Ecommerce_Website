import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./quantityToggle.js";

const productContainer = document.querySelector("#productContainer");   // Insert the cards into this
const productTemplate = document.querySelector("#productTemplate");     // Insert from the productTemplate

export const showProductContainer = (data) => {
       if(!data){
        return false;
       }
     
       data.forEach(curProd => {
        // console.log(curProd);
        const{brand, category , description, id ,image, name, price, stock} = curProd;
    
        const productClone = document.importNode(productTemplate.content, true);    //Using the import node the innerHTML data copied into the productClone..
        // console.log(productClone);
    //  console.log(productClone);
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);       // Set The ID for each and every card
        
       // Put the content into the card by using the template data 
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productPrice').textContent = ` $ ${price}`;
        productClone.querySelector('.productActualPrice').textContent = `$ ${price * 4}`;
        
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
                 homeQuantityToggle(event,id,stock);
        });

        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event) => {
                  addToCart(event,id,stock);
        });

        productContainer.append(productClone);
    });
      

}