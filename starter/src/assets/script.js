/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
let remainingBalance = 0;

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const product1 = {
  name: "Cherry",
  price: 3.99,
  quantity: 0,
  productId: 101,
  image: "/images/cherry.jpg"
};

const product2 = {
  name: "Orange",
  price: 2.50,
  quantity: 0,
  productId: 102,
  image: "/images/orange.jpg"
};

const product3 = {
  name: "Strawberry",
  price: 4.99,
  quantity: 0,
  productId: 103,
  image: "/images/strawberry.jpg"
};

products.push(product1, product2, product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let product, cartIndex;

  // Get product based on productId from the products array
  product = products.find( p => p.productId === productId);
  
  // Check if the product is in the cart
  cartIndex = cart.findIndex( p => p.productId === productId);

  if( cartIndex === -1) {
    product.quantity = 1;  
    cart.push(product);
  }
  else {
    cart[cartIndex].quantity += 1
  }
}


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){

  for( let i = 0; i < cart.length; i++){
    if( cart[i].productId == productId){
      cart[i].quantity += 1;
      break;
    }
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){

  for( let i = 0; i < cart.length; i++){
    if( cart[i].productId == productId){
      cart[i].quantity -= 1;

      if( cart[i].quantity == 0){
        cart.splice(i, 1);
      }
      break;
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){

  for( let i = 0; i < cart.length; i++){
    if( cart[i].productId == productId){
      cart[i].quantity = 0;

      if( cart[i].quantity == 0){
        cart.splice(i, 1);
      }
      break;
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){

  let totalCost = 0;

  for( let i = 0; i < cart.length; i++){
    cost = cart[i].quantity * cart[i].price;
    totalCost += cost;

  }
  return totalCost;

}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.splice(1, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  
  remainingBalance = amount - cartTotal();
  return remainingBalance;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
