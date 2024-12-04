// ### 🎫 Ticket 5 - Type mismatches

// You and your team have now been tasked with debugging and fixing the code within `ticket-5/index.js`.

// Running the file should log the following to the console:

// > The total cost for this cart is £23.60



const shoppingCart = [
  {
    product: "Bananas",
    price: 0.5,
    quantity: 6,
  },
  {
    product: "Apples",
    price: 0.7,
    quantity: 8,
  },
  {
    product: "Yoghurt",
    price: 1.5,
    quantity: 10,
  },
];

let totalCost = 0;

for (let i = 0; i < shoppingCart.length; i++) {
  
  const item = shoppingCart[i];
  
  const costForItem = item.price * item.quantity;
  totalCost += costForItem;

}



const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});
console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);


