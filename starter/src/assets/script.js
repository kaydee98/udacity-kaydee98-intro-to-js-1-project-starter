const products = []; // Array to store all product objects
let remainingBalance = 0;
let totalPaid = 0;

// Define product objects and add them to the products array
const product1 = {
  name: 'Cherry',
  price: 3.99,
  quantity: 0,
  productId: 101,
  image: '/images/cherry.jpg',
};

const product2 = {
  name: 'Orange',
  price: 2.50,
  quantity: 0,
  productId: 102,
  image: '/images/orange.jpg',
};

const product3 = {
  name: 'Strawberry',
  price: 4.99,
  quantity: 0,
  productId: 103,
  image: '/images/strawberry.jpg',
};

products.push(product1, product2, product3);

// Array to hold products that are added to the cart
const cart = [];

// Helper function to find the index of a product in the cart by productId
function findCartProductIndex(productId) {
  return cart.findIndex((p) => p.productId === productId);
}

// Adds a product to the cart by productId.
// Increases quantity if the product is already in the cart.
function addProductToCart(productId) {
  // Get product based on productId from the products array
  const product = products.find((p) => p.productId === productId);

  // Check if the product is in the cart
  const cartIndex = findCartProductIndex(productId);

  if (cartIndex === -1) {
    product.quantity = 1;
    cart.push(product);
  } else {
    cart[cartIndex].quantity += 1;
  }
}

// Increases the quantity of a product in the cart by productId
function increaseQuantity(productId) {
  const cartIndex = findCartProductIndex(productId);
  cart[cartIndex].quantity += 1;
}

// Decreases the quantity of a product in the cart by productId.
// Removes the product if quantity reaches 0.
function decreaseQuantity(productId) {
  const cartIndex = findCartProductIndex(productId);
  cart[cartIndex].quantity -= 1;

  // If the quantity is reduced to 0, remove the product from the cart
  if (cart[cartIndex].quantity === 0) {
    cart.splice(cartIndex, 1);
  }
}

// Removes a product from the cart entirely by productId and sets its quantity to 0.
function removeProductFromCart(productId) {
  const cartIndex = findCartProductIndex(productId);
  cart[cartIndex].quantity = 0;
  cart.splice(cartIndex, 1);
}

// Calculates the total cost of all products in the cart by summing their price and quantity.
function cartTotal() {
  let totalCost = 0;

  for (let i = 0; i < cart.length; i += 1) {
    const cost = cart[i].quantity * cart[i].price;
    totalCost += cost;
  }

  return totalCost;
}

/* Empties the products from the cart */
function emptyCart() {
  cart.splice(0, cart.length);
  totalPaid = 0;
}

// Processes payment by subtracting the amount paid from the cart total.
// Returns the remaining balance. Positive if overpaid, negative if underpaid
function pay(amount) {
  totalPaid += amount;

  const diff = totalPaid - cartTotal();
  remainingBalance = cartTotal() - totalPaid;

  // reset totalPaid if enough to cover cart total
  if (diff >= 0) {
    totalPaid = 0;
  }

  return diff;
}

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
};
