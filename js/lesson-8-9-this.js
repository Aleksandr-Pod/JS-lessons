
// function foo() {
//     console.log(this); // undefined
// }
// foo();


// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("Show tag -> This:", this);
//     }
// }
// user.showTag(); // this в контексте user.
// const outerShowTag = user.showTag;
// // в переменную просто записывается функция,
// // как значение свойства объекта !!!
// outerShowTag(); // this вне контекста
// // т.к. нет привязки к объекту


// class Cars {
//     wheels = 4;
//     engine = 1;
//     light = 4;
// }
// const lanos = new Cars();
// lanos.power = 85;
// lanos.light = 6;
// console.log("lanos:", lanos);

// Используем конструктор внутри класса:
// class Cars {
//     constructor (wheels, lights, power) {
//         this.wheels = wheels;
//         this.lights = lights;
//         this.power = power;
//     }
// }
// const lanos = new Cars(5, 4, 85);
// console.log("lanos", lanos); // lanos |> Cars {wheels: 5, lights: 4, power: 85}

// ========== Модуль  10 - задача 1
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//       console.log(pizzaName);
//       console.log(this.checkPizza(pizzaName))
//    const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Smoked"));

// ============ Модуль 10 - задача 3
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getEmails());

// ================== Модуль 10 - задача 10
// class Storage {
//   constructor (items = []) {
//     this.items = items;
//   }
//   getItems() {
//   	return this.items;
//   }
//   addItem(newItem) {
//    	this.items.push(newItem); 
//   }
//   removeItem(itemToRemove) {
//   	this.items = this.items.filter(el => el !==itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//==================== Модуль 10 - задача 11
// class StringBuilder {
//     constructor(initialValue = "") {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str = "") {
//         this.value += str;
//     }
//     padStart(str = "") {
//         this.value = str + this.value;
//     }
//     padBoth(str = "") {
//         this.value = str + this.value + str;
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ================== Модуль 10 - задача 16
// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice > Car.MAX_PRICE ? this.#price : newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

// =============== Модуль 5 - задача 17
// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     return price > this.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//   };

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(`Car: audi ${audi.price}: ` + Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(`Car: bmw ${bmw.price}: ` + Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ================= Модуль 5 - задача 18
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   }
// }


// ================= Модуль 5 - задача 19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// constructor ({email, accessLevel}) {
//   super(email);
//   this.accessLevel = accessLevel;
// }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// =================== Модуль 5 - задача 20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist (email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// ================== Модуль 10 === тренинг
// class User {
//   // Синтаксис объявления метода класса
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name; // Это будут публичные свойства экземпляра
//     this.email = email; // ... публичные свойства экземпляра
//   }
// }
// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
// poly.birthday = "18 dec";
// console.log(poly);


// === Функция конструктор !!! ===
//
// const Client = function (name, weight, height) {
//     this.name = name;
//     this.weight = weight;
//     this.height = height;

//     this.bodyMassIndex = function () {
//         const index = this.weight / (this.height * this.height * 0.1);

//         return `Client ${this.name} has body mass index ${index.toFixed(3)}`;
//     };
// };

// const john = new Client("John", 80, 170);
// john.bodyMassIndex(); // Client John has body mass index 0.028

// const mary = new Client("Mary", 50, 165);
// mary.bodyMassIndex(); // Client Mary has body mass index 0.018


// function fn(price) {
//     const maxPrice = 55000;
// return price > maxPrice ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits"
// }
// console.log(fn(50000));


// ========== Функция конструктор ===========
// function Cars(brand, model, type) {
//   this.brand = brand;
//   this.model = model;
//   this.type = type;
//   this.carPrice = function (price) {           // так ?
//   this.prototype.carPrice = function (price) {  // или так ?
//     return price > 10000 ? "Too high !" : `Car price: ${price}`;
//   }
// }

class Cars {
  constructor(brand, model, type) {
    this.brand = brand;
    this.model = model;
    this.type = type;
  }
  carPrice (price) {
    return price > 10000 ? "Too high !" : `Car price: ${price}`;
  }
}

const myCar = new Cars("Daewoo", "Matiz", "hatchback")
console.log(myCar);
console.log(myCar.carPrice(7000));




