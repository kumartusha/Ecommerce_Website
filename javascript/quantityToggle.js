//   Handling the toggle event for the stock element means (Button, Para and second Button)
  export const homeQuantityToggle = (event, id, stock) => {
    
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);         // Return the whole card data mapping with the id on the click event

    const productQuantity = currentCardElement.querySelector('.productQuantity');
    // console.log(productQuantity);          // Return the productQuantity class Container to update the quantity

    
    // So, in summary, this line of code is attempting to extract the value of the "data-quantity" attribute from the HTML element referenced by productQuantity, parse it into an integer, and assign it to the variable quantity. If the attribute is missing or cannot be converted to an integer, the default value of 1 will be assigned to quantity..
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
//   console.log(quantity);  // Print Always 1 because set the value initially 1 if first will not work properly


// Note:- henever we click on the increment then data-quantity attribute will be added.....................

    //  For increment the value of the cartIncrement
    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            ++quantity;
        }else if(quantity === stock){
            quantity = stock;
        }
    }
    
    //  For Decrement the value of the cartDecrement
    if(event.target.className === 'cartDecrement'){
       if(quantity > 1){
        --quantity;
       }
    }

    productQuantity.innerText = quantity;
    // console.log(quantity);
    productQuantity.setAttribute("data-quantity" , quantity.toString());
    // console.log(productQuantity);
    return quantity;
  }