// // Функция высшего порядка:
// const a = function (a, b, callback) {
//     return callback(a, b);
// }

// // Callback функция:
// function add(x, y) {
//     return x + y;
// }

// // Callback функция:
// function multiply(x, y) {
//     return x * y;
// }

// console.log(a(4, 7, add));
// console.log(a(4, 7, multiply));



// *********************************
// // Сделаем функцию фильтраб работающую по разным условиям
// const fruits = [
//     { name: "grape", price: 150, quantity: 34 },
//     { name: "orange", price: 120, quantity: 18 },
//     { name: "plum", price: 200, quantity: 5 },
//     { name: "banana", price: 100, quantity: 41 },
// ];
// // Функция высшего порядка:
// const filter = function (array, metod) {
//     const result = [];
//     for (const elem of array) {         // Перебираем весь массив
//         if (metod(elem) === true) {    // Если проверка метода true
//             result.push(elem);          // Добавляем элемент в результат
//         }
//     }
//     return result;
// };
// function expensive(value) {         // Фильтр по цене

//     return value.price >= 150;
// }
// function manyQuantity(value) {      // фильтр по количеству
//     return value.quantity >= 20;
// }
// console.log("Выводим фильтр по дорогим товарам:")
// console.log(filter(fruits, expensive));

// console.log("Выводим фильтр по товарам с большим количеством:")
// console.log(filter(fruits, manyQuantity));




// ********************************************************
// ----  Замыкание функции

// const fnA = function(param = 0) {
//     console.log("Function A in process: param", param);
//     const innerFunction = function(param2 = 2) {
//         consol.log(`Inner Function in process with param:${param2}`);
//     }
//     return innerFunction;
// }
// const fnB = fnA(); // Результат ф-ции присваивается в другую ф-цию
// console.log(fnA);  // Исходная ф-ция
// console.log(fnB);  // Внутренняя ф-ция


// ------- Модуль 4 - задача 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }
// // ----------- ИЛИ
// const makeMessage = (pizzaName, callback) => callback(pizzaName);

// makeMessage("Royal Grand", makePizza);
// makeMessage("Royal Grand", deliverPizza);
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Royal Grand", deliverPizza));


// ---------- Модуль 4 - задача 4

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {

//       if (this.pizzas.includes(pizzaName)) {
//           return onSuccess(pizzaName);
//       }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
// };

// // Callback for onSuccess
// const makePizza = (pizzaName) => `Your order is accepted. Cooking pizza ${pizzaName}.`

// // Callback for onError
// const onOrderError = (error) => `Error! ${error}`

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach((el) => totalPrice += el)
//   return totalPrice;
//   }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// =========== Модуль 4 - задача 13
// const changeEven = (numbers, value) => {
//   const newNumbers = [];
//   numbers.forEach(number => number % 2 === 0 ? newNumbers.push(number + value) : newNumbers.push(number))
//   return newNumbers                
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));


// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// // ----------- Лайф Хак ------------
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index)
// console.log(uniqueCourses); // Только уникальные курсы (без повтора)


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// --------------- Модуль 4 - задача 25.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// // Нужно вывести массив свех друзей у юзеров без повторений,
// // Операция в одну строку:
// // const getFriends = (users) => {
// //      return users.flatMap(user => user.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// // };
// // console.log(getFriends(users));

// -------------- модуль 4 - задача 26.
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive);
// };
// console.log(getActiveUsers(users));

// ----------- Модуль.4 - Задача 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((summ, playtime) => summ + playtime, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ------------- Метод - sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// console.log([...releaseDates].sort()) // в порядке возрастания
// console.log([...releaseDates].sort((a, b) => b - a)); // ... убывания

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// console.log([...authors].sort());

// Сортировка студентов, по значению баллов (числовым значениям):

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];
// console.log([...students].sort((a, b) => a.score - b.score));

// ---------- Сортировка по строчным значениям:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// console.log([...books].sort((a, b) => a.author.localeCompare(b.author)));
// console.log([...books].sort((a, b) => b.author.localeCompare(a.author)));


// ----------------- Модуль.4 Задача 45
// чтобы в переменной names получился массив имён авторов
// в алфавитном порядке, рейтинг книг которых больше
// значения переменной MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.table(names);

// ---------------- Модуль.4 Задача 47

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getSortedFriends = users => {
//   return users.flatMap(el => el.friends)
//     .filter((el, idx, arr) => arr.indexOf(el) === idx)
//     .sort((a, b) => a.localeCompare(b))
// };
// console.table(users);
// console.table(getSortedFriends(users));


