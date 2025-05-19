const pizzaToppings = ["pepperoni", "mushrooms", "onions", "sausage"];

function greetCustomer() {
  const messageLines = ["Welcome to Pizza House, our toppings are:"];
  for (const topping of pizzaToppings) {
    messageLines.push("- " + topping);
  }
  const message = messageLines.join("\n");
  console.log(message);
}

function getPizzaOrder(size, crust, ...toppings) {
  let toppingsList = "";
  for (let i = 0; i < toppings.length; i++) {
    toppingsList += toppings[i];
    if (i < toppings.length - 1) {
      toppingsList += ", ";
    }
  }
  console.log(`One ${size} ${crust} crust pizza with ${toppingsList} coming up!`);
  return [size, crust, toppings];
}

function preparePizza(pizzaArray) {
  console.log("...Cooking pizza...");
  return {
    size: pizzaArray[0],
    crust: pizzaArray[1],
    toppings: pizzaArray[2]
  };
}

function servePizza(pizzaObject) {
  let toppingsString = "";
  for (let i = 0; i < pizzaObject.toppings.length; i++) {
    toppingsString += pizzaObject.toppings[i];
    if (i < pizzaObject.toppings.length - 1) {
      toppingsString += ", ";
    }
  }
  console.log(`Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${toppingsString}. Enjoy!`);
  return pizzaObject;
}

greetCustomer();
const order = getPizzaOrder("large", "thick", "pepperoni", "mushrooms", "onions");
const pizza = preparePizza(order);
servePizza(pizza);
