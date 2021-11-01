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

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice >= customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids,
//      you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
// }
// makeTransaction(320, 2, 500);
// console.log(message);

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000) {
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
//   console.log(result);
// }
// let message;
// let maxLength;
// formatMessage("Curabitur ligula sapien", 16);

// let result;
// let message = "Hara hjr oret";
// result = message.toLowerCase().includes("hara");
// console.log(result);

// ============= 20-10-21 ===============

// let weight = '88,3';
// let height = '1.75';

// const bmi = Number(weight.replace(",", ".")) / Math.pow(Number(height), 2);
// bmiRounded = Math.round(bmi, 3);
// console.log(bmiRounded); // 28.8

// x = Math.round(1.235 * 100) / 100; // 1.24
// y = Math.round(1.235, -2); // 1
// console.log("x=", x);
// console.log("y=", y);

// const totalMinutes = 125;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours + ':' + minutes);
// // Если нужно добавить символы или нули ..
// const doubleDigitHours = String(hours).padStart(3, "=");
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// console.log(4 - "5" + 0xf - "1e1"); // 4 (почему остальное не выводится?)

// let password = "";
// do {
//     password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
// console.log("Ввели пароль: ", password);

// let a = prompt("Сколько у Вас гривен ?");
// console.log(String(a).padEnd(3, 0) + " копеек");

// let scriptName = prompt("Какое официальное название JavaScript ?");
// if (scriptName.toLowerCase() === "ecmascript") {
//     console.log("Верно !" + scriptName.slice(0, 4).toUpperCase() + scriptName.slice(4).toLowerCase());
// } else {
//     console.log("Не знаете? ECMAScript!    " + scriptName.toLowerCase());
// }

// let a = "GhteHGDToiyknju"; // Приведём строку к своему порядку.
// console.log(a.slice(0, 4).toUpperCase() + a.slice(4).toLowerCase());


// let number = "";
// do {
//     number = prompt('Введите число: (чтобы остановить, напишите - stop)');
//     if (number > 0) {
//         console.log(number + " - это положительное число");
//     } else if (number == 0) {
//         console.log(number + " - это нуль");
//     } else if (number < 0) {
//         console.log(number + " - это отрицательное число");
//     } else {
//         console.log(number + " - это вообще не число !");
//     }
// } while (String(number).toLowerCase() !== "stop");

// let number = false; // Если false написать в кавычках, он не равен 0
// console.log(number == 0); // true

// let a = 20;
// let b = 130;
// if(a > 100 && b > 100) {
//     a > b ? console.log(a) : console.log(b);
// } else {
//     console.log(b + 512);
// }

// let link = 'https://my-site.com/about';
// if (link.endsWith("/")) {
//     link = link;
// } else {
//     link += "/";
// }
// console.log(link);
// ----------------- Второй вариант -------------
// if (!link.endsWith("/")) link += "/"; // Обрати внимание на "!"


// const daysUntilDeadline = 0;
// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сегодня');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Послезавтра');
//         break;
//     default:
//         console.log('Дата в будущем');
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 5) {
//     console.log(i);
// }


// const login = prompt("Введите логин:");
// let pass = "";
// if (login === "Admin") {
//     pass = prompt("Введите пароль:");
//     console.log(pass === "Я админ" ? "Здравствуйте !" : "Не верный пароль")
// } else if (login === null) {
//     console.log("Отменено");
// } else {
//     console.log("Я вас не знаю");
// }


// ============ ЗАНЯТИЕ - 3 (Массивы) ===============
//  1)
// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Можно написать проще:
// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }

//  2)
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//    if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если нет, то запишем в message сообщение об отсутствии имени
//     // (Эту строку можно поставить в начале, до цикла)
//   message = "Клиента с таким именем нету в базе данных!";
// }
// console.log(message); // "Клиент с таким именем есть в базе данных!"


//  3)
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// // Для чисел меньше чем порог срабатывает continue, выполнение тела 
// // прекращается и управление передаётся на следующую итерацию.
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${number}`); // 18, 29, 34
// }

//  Своя задачка - удалить все гласные из строки.
//               Вариант 1.

// const glasn = ["a", "o", "u", "y", "i", "e"];
// const str = "jsnelzyoqj";
// console.log(str);
// const strMass = str.split("");
// for (k = 1; k < strMass.length; k += 1) {
//     for (i = 0; i < glasn.length; i += 1) {
//         if (strMass[k] !== glasn[i]) {
//             continue;
//         } else { strMass[k] = "_"; }
//     }
// }
// const newStr = strMass.join("");
// console.log(newStr);
// console.log();

//                Вариант 2
// const glasn = ["a", "o", "u", "y", "i", "e"];
// const str = "jsnelzyoqj";
// console.log(str);
// const strMass = str.split("");
// for (k = 1; k < strMass.length; k += 1) {
//         if (glasn.includes(strMass[k])) {
//             strMass[k] = "";
//     }
// }
// const newStr = strMass.join("");
// console.log(newStr);

// const str = "atractia";
// console.log(str.replaceAll("a", ""));

// const mass = [24, 15, 46, 21, 11, 8, 19, 4];
// let total = 0;
// for (const massEl of mass) {
//     total += massEl;
// }
// console.log(total);

// let theSmallest = mass[0];
// for (const massEl of mass) {
//     if (theSmallest > massEl) {
//         theSmallest = massEl;
//     }
// }
// console.log(theSmallest)

// const str = "abrakadabra"
// let newStr = str.split("bra").join("");
// console.log(newStr);

//  -- Ещё одна крутая задачка - инвертировать введённые символы --

// const str = "FagKKRvfs"; // Заданная строка
// console.log(str);
// const strArray = str.split(""); // Строку в массив
// let newStr = ""; // Новая строка
// for (const strArrayElem of strArray) {
//     if (strArrayElem === strArrayElem.toLowerCase()) {
//         newStr += strArrayElem.toUpperCase();
//     }
//     else newStr += strArrayElem.toLowerCase();
// }
// console.log(newStr);

// -- Сократим код, используя тернарный оператор

// const str = "FagKKRvfs"; // Заданная строка
// console.log(str);
// const strArray = str.split(""); // Строку в массив
// let newStr = ""; // Новая строка
// for (const strArrayElem of strArray) {
//     newStr += strArrayElem ===
//         strArrayElem.toLowerCase() ?
//         strArrayElem.toUpperCase() :
//         strArrayElem.toLowerCase();
// }
// console.log(newStr);



// ================== ЗАНЯТИЕ - 4 - ФУНКЦИИ ===============

// function multiply() {
//   let total = 1;
//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  10
// console.log(multiply(1, 2, 3, 4, 5)); //  15


// ДЗ - 3

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//         return "Your order is empty!";
//     }
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!"
//     }
//     return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(35, 0));

// ----------- Задачка от Репеты (rest) ----------

// const fn = function (mass, ...args) {
//     const result = [];
//     for (const arg of args) {
//         if (mass.includes(arg)) {
//             result.push(arg);
//        }
//     }
//     return result;
// }
// console.log(fn([1, 2, 3, 4, 5], 3, 10, 5));

// function calculateTotalPrice(order) {
//   let total = 0;
//     console.log(order);
// for (const item of order) {
//   total += item;
// }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ----------- Задача - поменять все буквы в строке в обратном порядке
// const str = "Welcome to hell";
// console.log(str);
// let newStr = str.split("").reverse().join("");
// console.log(newStr);

// ----------- Задача - поменять буквы в словах в обратном порядке
// const str = "Welcome to hell";
// console.log(str);
// const strArray = str.split(" ");
// console.log(strArray);
// for (i = 0; i < strArray.length; i += 1) {
//     strArray[i] = strArray[i].split("").reverse().join("");
//     console.log (`${i+1}: ${strArray[i]}`);
// }
// const newStr = strArray.join(" ");
// console.log(newStr);

// -------- Задачка - жесть
// сортировки массива строк в алфавитном порядке по первой букве элемента.
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const sub = [];
// console.log(langs);
// for (i = 0; i < langs.length; i += 1) {
//     for (j = i + 1; j < langs.length; j += 1) {
//         if (langs[i][0] > langs[j][0]) {
//             console.log(langs[i] + " > " + langs[j]);
//             sub[0] = langs[j];
//             langs[j] = langs[i];
//             langs[i] = sub[0];
//             console.log("swap to: " + langs[i] + " - " + langs[j]);
//         }
//     }
// }
// console.log(langs);

// -------- ДЗ 25
//возвращает новый массив, состоящий из одинаковых элементов,
// которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
// const newArray = [];
//   for (elem of array1) {
//     if (array2.includes(elem)) {
//       newArray.push(elem);
//     }
//   }
//   return newArray;
// }

// function includes(array, value) {
//     let a = false;
//     array.forEach((elem) => {
//         elem === value ? a = true : a = a;
//         })
//     return a;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));

