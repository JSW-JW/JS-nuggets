// Promises

/*
 - "Promise is a proxy for a value not necessarily known
 when the promise is created" - Mozila Developer Network
 - Promises (similar to callbacks) are used for async computations.
 - Think of a promise as representing as a value that may be available
  now, later or never
 - Can associate a handler with an async action
 - A promise exists in three states:
    - Pending: Initial state, not fulfilled
    - Fulfilled: OK! Got it!
    - Rejected: failed
*/

/* Case 1 */
// const testPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         reject("promise not good. Rejected.");
//     }
//     setTimeout(() => {
//         resolve("promise OK!");
//     }, 1000)
// })

// testPromise.then((resolveMessage) => {
//     console.log(`Looks like: ${resolveMessage}`);
// }).catch((rejectMessage) => {
//     console.log(`Error: ${rejectMessage}`)
// })

// testPromise
//     .then(
//         (resolveMessage) => {
//             console.log(`Looks like: ${resolveMessage}`);
//         },
//         (rejectMessage) => {
//             console.log(`${rejectMessage}`);
//         }
//     )


/* Case 2 */
// function numAdder(n1, n2) {
//     const addedNum = n1 + n2
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(addedNum);
//         }, 1000)
//     }) 
// }

// function numSquarer(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num * num);
//         }, 2000)
//     })
// }

// numSquarer = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num*num);
//         }, 1000)
//     })
// }

// numAdder(10, 20)
//     .then((data) => {
//         console.log(data);
//         return numSquarer(data)
//     })
//     .then((result) => {
//         console.log(result)
//     }); 


/* Case 3 */
// Is it possible to delay only like below when using Promise.resolve() ?
// const prom = () => {
//     setTimeout(() => {
//         console.log("Making delay for 1 sec...");
//     }, 1000)
//     return Promise.resolve([10,20,30]);
// }


/* Case 4 */
// const prom = () => {
//     return Promise.resolve([10, 20, 30])
// }

// prom()
//     .then(arr => arr.map(num => num * 10))
//     .then(transformedNums => console.log(transformedNums));

// const anotherProm = () => Promise.resolve({text: 'resolved :D'});
// anotherProm().then(data => console.log(data.text));


/* Case 5 */
// const prom = new Promise((resolve, reject) => {
//     if (Math.random() > 0.95) {
//         reject("Rejected");
//     }
//     setTimeout(() => {
//         resolve("Successfully resolved :D");
//     }, 1000)
// })

// prom
//     .then(
//         res => {
//              console.log(res);
//         },
//         err => {
//              console.log(err);
//         }
//     )

// console.log("Code after promise line");


/* Case 6 */
// Promise.resolve()
//     .then(
//         res => {
//             return Promise.reject();
//         },
//         err => console.log("rejected 1")
//     )
//     .then(
//         res => {
//             console.log("resolved well");
//         },
//         err => {
//             return Promise.reject("Caught promise rejected");
//         }
//     )
//     .catch(err => console.log(err));


/* Case 7 */
// const timeLogger = (msg, time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg)
//         }, time)

//         if (typeof msg !== typeof "string" || typeof time !== "number") {
//             reject("type error");
//         }
//     });
// }

/* promise reject for type error */
// timeLogger("first message", "500")
//     .then((msg) => console.log(msg))
//     .catch(err => console.log(err));


// timeLogger("first", 1000)
//     .then(msg => {
//         console.log(msg);
//         return timeLogger("second", 500);
//     })
//     .then(msg => {
//         console.log(msg);
//         return timeLogger("third", 200);
//     })
//     .then(msg => {
//         console.log(msg);
//         return timeLogger("fourth", 100);
//     })
//     .then(msg => {
//         console.log(msg)
//         return "string1";
//     })
//     .then(str => {
//         console.log(str);
//         return "string2";
//     })
//     .then(str => {
//         console.log(str);
//         return "string333333";
//     })
//     .then(str => console.log(str))
//     .catch(err => console.log(`error: ${err}`));



/* Case 8 */
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("A");
    }, 500)
})

const p2 = Promise.resolve("B");
const p3 = Promise.reject("C");

// it reject all promises unless all of them are resolved.
Promise.all([p1, p2, p3])
    .then(data => console.log(data))
    .catch(err => console.log(err));


/* Pratice for Case 8 */
const username = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({text: "billybob595"}); 
    }, 800)
})
const position = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({text: "manager"});
    }, 300)
})

const employees = {

}
Promise.all([username, position])
    .then(data => data.map(entry => entry.text))
    .then(content => employees[0] = content)
    .then(() => console.log(employees))
    .catch(err => console.log(err));


/* Case Extra for studying function call */
// function async1 (param) {
//     return new Promise(function(resolve, reject) {
//         resolve(param*2);
//     });
// }
// function async2 (param) {
//     return new Promise(function(resolve, reject) {
//         resolve(param*3);
//     });
// }
// function async3 (param) {
//     return new Promise(function(resolve, reject) {
//         resolve(param*4);
//     });
// }
 
// var start = 1;
// async1(start)
//     .then((data) => async2(data))
//     .then((data) => async3(data))
//     .then((data) => console.log(`result: ${data}`));

// async1(start)
//     .then(async2)
//     .then(async3)
//     .then(result => {
//         console.log(result); // 24
//     });


