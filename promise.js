const cart = ["shoes", "pants", "kurta"];
let wallet = [2000];
console.log("Start");

// createOrder;
// proceedToPayment;
// showOrderSummary;
// updateWallet;

createOrder(cart)
    .then((orderId) => {
        console.log("Order ID = "+orderId);
        return orderId;
    })
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((payment) => {
        console.log("Total Payment = "+payment);
        return showOrderSummary(payment);
    })
    .then((summary,payment) => {
        console.log(summary);
        return updateWallet(summary,payment);
    })
    .then((wallet) => {
        console.log("Wallet Balance: Rs."+wallet);
    })
    .catch((err) => {
        console.log(err.message);
    });

//creating new promise

function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 1000);
        }
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        const payment = [1200];
        if (orderId) {
            resolve(payment);
        } else {
            const err1 = new Error("Order Id not Valid");
            reject(err1);
        }
    });
}

function showOrderSummary(payment) {
    return new Promise((resolve, reject) => {
        const summary = "payment of "+payment+" Successfull";
        if (payment) {
            resolve(summary,payment);
        }
    });
}

function updateWallet(summary,payment) {
    return new Promise((resolve, reject) => {
        wallet = wallet[0] - payment[0];
        if (summary) {
            resolve(wallet);
        }
    });
}

function validateCart(cart) {
    return true; //return true to validate ,return flase to show error.
}

console.log("End");
