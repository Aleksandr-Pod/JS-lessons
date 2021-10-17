// const a = "530";
// console.log(a);

// console.log(typeof a);
// const b = Number(a);
// console.log(typeof b);
// console.log("===============");
// const usrName = prompt("Введите ваше имя: ");
// console.log("Привет, ", usrName);

// let width = prompt("Введите ширину окна: ");
// width = Number.parseFloat(width);
// console.log("Ширина окна:", width, "px");

// let salary = 1300.278615;
// salary = Number(salary.toFixed(2));
// и переводит в число

// const min = 10;
// const max = 50;
// let result = Math.round(Math.random() * (max - min) + min)
// console.log("Случайное число от ${min} до ${max}:", result);

// let name = prompt("Введите своё имя:");
// console.log(`Здравствуй, ${name}`);

// function add(a, b, c) {
//     console.log(a + b + c);
// }
// add(2, 3, 5);
// add(7, 8, 3);
// add(2, 9, 11);

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// }
// console.log(calculateTotalPrice(3, 125));


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     return message;
// }
//     console.log(makeOrderMessage(2, 525, 50));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  If (totalPrice >= customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids,
     you have ${customerCredits - totalPrice} credits left`;
  }
  return message;
}
// makeTransaction(320, 2, 500);
// console.log(message);
