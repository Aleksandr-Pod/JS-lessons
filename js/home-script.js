// ========= ОТВЕТЫ   ИЗ   КАХУТА

const user = {
    myName: "maxim",
    age: 13,
}
// const { color } = user;
// console.log(color); // Будет "undefined", т.к. такого свойства нет.


const { myName: userName } = user;
console.log(myName); // Будет ошибка !
console.log(myName === "");

// function fn({ username } = {}) {
//     console.log(username); // Будет undefined, т.к. свойство username
//     // - никак не определено по умолчанию, а в пустом объекте нет данных.
// }
// fn();

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotionName() {
//     return Object.values(this.potions[1]);
//   }
// }
// console.log(atTheOldToad.getPotionName());