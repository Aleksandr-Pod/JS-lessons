// ========= ОТВЕТЫ   ИЗ   КАХУТА

// const user = {
//     myName: "maxim",
//     age: 13,
// }
// const { color } = user;
// console.log(color); // Будет "undefined", т.к. такого свойства нет.


// const { myName: userName } = user;
// console.log(myName); // Будет ошибка !
// console.log(myName === "");

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



// ============ КАЗИНО ===========
function checkNumber (number) {
    if (number === 0) {
        return "Stop";
    } else if (number < 1 && number > 36) {
        return "error-outOfRange";
    }
    return `Ваша ставка на число ${number}`;
}
function checkBet(bet = 0) {
    if (userMoney < bet) {
        return `Ваша ставка ${bet} превышает ваши деньги ${userMoney}`
    }
    return `Ваша сумма ставки: ${bet}`
}
function sleep(milliseconds) { // Пауза в милисекундах
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


let win = 0;
let randomNumber = 0;
let number = 0;
let userMoney = 1000;
console.log(`У вас есть ${userMoney} денег`);
    for (let i = 1; i > 0; i -= 1) {
        number = parseInt(prompt("Введите число, на которое ставите (1 - 2): (0 - выход из игры)"));
        console.log(number);
        if (number === 0 || number === null) {
            break;
        }
        console.log(checkNumber(number));
        let bet = parseInt(prompt("Введите сумму ставки:"));
        console.log(checkBet(bet));
        sleep(2000);
        console.log("Вращаем барабан");
        sleep(2000);

        randomNumber = Math.floor(Math.random() * 2 + 1);
        console.log(`Выпадает число: ${randomNumber}`);
        sleep(2000);
        if (number === randomNumber) {
            win = bet;
            console.log(`Поздравляю вас, вы выиграли ${win} денег !!!`);
            userMoney += win;
            console.log(`Теперь у Вас ${userMoney} денег !`)
        } else {
            console.log("Вы проиграли, попробуйте ещё.")
            userMoney -= bet;
            console.log(`У Вас осталось ${userMoney} денег`);
        }
        i += 1;
    }
console.log("ИГРА ЗАКОНЧЕНА");
sleep(2000);



// for (let i = 1; i < 10; i += 1) {
//     const randomNumber = Math.floor(Math.random() * 2 + 1);
//     console.log(randomNumber);
// }
