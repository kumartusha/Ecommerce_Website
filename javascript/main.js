// import { showProductContainer } from "./homeProductsCard";

import { showProductContainer } from "./homeProductsCard.js";
// import { products } from "./api/products.json";                     //Not Working
 //  Include the style.css
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="./style/style.css">');

// Json Data fetch from the product.json file 
fetch("./api/products.json").then((response) => response.json())
.then((data) => {

  // console.log(data);     //Contain the array of object and the package.json related data
    
    // Call the function to display the items..
    showProductContainer(data);          // This function is not working outside the fetch syntax thats why mention here..

}).catch((error) => {
  
  console.log("The Error are:- ",error);

});

