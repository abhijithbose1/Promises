const cart = ["shoes", "pants", "kurta"];
let wallet = [2000];
console.log("Start");

// //! createOrder;
// //! proceedToPayment;
// //! showOrderSummary;
// //! updateWallet;

// createOrder(cart)
//     .then((orderId) => {
//         console.log("Order ID = " + orderId);
//         return orderId;
//     })
//     .then((orderId) => {
//         return proceedToPayment(orderId);
//     })
//     .then((payment) => {
//         console.log("Total Payment = " + payment);
//         return showOrderSummary(payment);
//     })
//     .then(([summary, payment]) => {
//         console.log(summary);
//         return updateWallet(summary, payment);
//     })
//     .then((wallet) => {
//         console.log("Wallet Balance: Rs." + wallet);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// //*creating new promise

// function createOrder(cart) {
//     return new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not Valid");
//             reject(err);
//         }
//         const orderId = "12345";
//         if (orderId) {
//             // setTimeout(function () {
//             resolve(orderId);
//             // }, 1000);
//         }
//     });
// }

// function proceedToPayment(orderId) {
//     return new Promise((resolve, reject) => {
//         const payment = [1200];
//         if (orderId) {
//             resolve(payment);
//         } else {
//             const err1 = new Error("Order Id not Valid");
//             reject(err1);
//         }
//     });
// }

// function showOrderSummary(payment) {
//     return new Promise((resolve, reject) => {
//         const summary = "payment of " + payment + " Successfull";
//         if (payment) {
//             resolve([summary, payment]);
//         }
//     });
// }

// function updateWallet(summary, payment) {
//     return new Promise((resolve, reject) => {
//         wallet = wallet[0] - payment[0];
//         if (summary) {
//             resolve(wallet);
//         }
//     });
// }

// function validateCart(cart) {
//     return true; //return true to validate ,return flase to show error.
// }

// //*promise all demonstration

// const promise1 = new Promise((resolve, reject) => {
//     resolve(["Java", "JavaScript"]);
//     // reject("Failed!");
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve(["Angular", "React"]);
//     // reject("Failed!");
// });

// //*promise all

// const promiseAll = Promise.all([promise1, promise2]);
// //!promise.all is not a constructor as Promise. so "new" keyword is not required.

// promiseAll
//     .then((res) => {
//         console.log("Promise All = ", res.flat(Infinity)); //flat will convert nested array to a single array
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //*promise allSettled

// const promiseAllSettled = Promise.allSettled([promise1, promise2]);

// promiseAllSettled
//     .then((res) => {
//         console.log("Promise AllSettled = ", res.flat(Infinity));
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //*promise.any

// const promiseAny = Promise.any([promise1, promise2]);

// promiseAny
//     .then((res) => {
//         console.log("Promise Any = ", res.flat(Infinity));
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //*promise.race

// const promiseRace = Promise.race([promise1, promise2]);

// promiseRace
//     .then((res) => {
//         console.log("Promise Race = ", res.flat(Infinity));
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //*normal fetch function using promise.then

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// //*normal fetch function using async and await

// async function fetchData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     console.log(json);
// }
// fetchData();

// //*passing url as argument in async function to avooid repeatation

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         return error;
//     }
// }
// const url1 = "https://jsonplaceholder.typicode.com/todos/1";
// const url2 = "https://jsonplaceholder.typicode.com/todos/2";
// const url3 = "https://jsonplacehoer.typicode.com/todos/3";

// fetchData(url1);
// fetchData(url2);
// fetchData(url3);

// //*passing url as getData and then passing it to fetchData by DEBUG MEDIA to avoid repeatation

// const getData = async (url) => {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         console.log(error);
//     }
// };
console.log("End");
