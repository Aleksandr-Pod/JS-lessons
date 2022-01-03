//



// ---------- PROMISE
// const calcSumm = (mess) => {
//     console.log(mess);
// }

// const errMess = (mess) => {
//     console.log(mess);
// }

// const makeOrder = () => {
//     const a = Math.random() > 0.5;
//     return new Promise((resolve, reject) => {
//         if (a) {
//             resolve(`Задача выполнена`);
//         }
//         // else не нужно ставить, после resolve будет return.
//         reject('Не получилось выполнить задачу');
//     })
// }

// makeOrder().then(calcSumm).catch(errMess);



//       Fetch - запросы
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }
