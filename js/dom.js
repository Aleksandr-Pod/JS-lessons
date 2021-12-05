//            Example - 1
// const menuItem = document.querySelector(".menu-item1");
// console.log(menuItem.textContent);
// menuItem.textContent = "Hello";
// menuItem.classList.add("greating"); // Добавляем класс "greating"
// console.log(menuItem.classList); // "menu-item1 greating"
// menuItem.style.backgroundColor = "teal";


//         Автоматизация создания списка из массива
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join("");
// console.log(markup); // Check the console, you'll see a single string with HTML tags
// list.innerHTML = markup; // Adding all the markup in one operation


//       Example - 3
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;
// article.innerHTML += htmlString; // Replace += with = operator. See the difference


//        Example - 4    insertAdjacentHTML("position", content)
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");


//        Example - 5  Создаём массив объектов и вставляем в DOM

// const colorBtnArr = [
//   { name: "red", code: "#f44366" },
//   { name: "green", code: "#4caf50" },
//   { name: "blue", code: "#2196f3" },
//   { name: "grey", code: "#607D8B" },
//   { name: "pink", code: "#E91E63" },
// ]

// const makeColorBtn = (options) => {    // Создаём функцию по сборке списка кнопок
//   return options.map(el => {         // Возвращаем из функции собраный массив
//     const colorBtnEl = document.createElement("button");
//     colorBtnEl.type = "button";
//     colorBtnEl.textContent = el.name;
//     colorBtnEl.style.backgroundColor = el.code;
//     return colorBtnEl;
//   });
// }
//   const colorBtnRef = document.querySelector(".colorBtnList");
// const colorBtnList = makeColorBtn(colorBtnArr);
// colorBtnRef.append(...colorBtnList);


//                Example - 6 (Transaction Table) 

import transactionsMarkup from "./transactions.js" // импорт массива транзакций (объектов) из файла 

const makeTransactionTableRow = ({ n, person, income, balance }) => {
  return `
  <tr>
    <td>${n}</td>
    <td>${person}</td>
    <td>${income}</td>
    <td>${balance}</td>
  </tr>`
}
const table = transactionsMarkup.map(row => makeTransactionTableRow(row)).join("");
const tableRef = document.querySelector(".js-transaction-table");
tableRef.insertAdjacentHTML("beforeend", table);