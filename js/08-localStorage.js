//         Модульность кода


import { helloMessage } from './my-module.js';
console.log(helloMessage);
import { fnA } from './my-module.js';
console.log(fnA(3, 5));

localStorage.setItem("userName", "John")
console.log(localStorage);


// Локальное хранилище

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage.getItem("ui-theme")); // "light"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null