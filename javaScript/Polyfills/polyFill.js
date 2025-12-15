// Array.map polyfill

// const arr = ['1','2',"3"];

// Array.prototype.myMap = function(cb){
//     let newArr = [];
//     for( let i = 0; i<this.length; i++){
//         newArr.push(cb(this[i],i,this));
//     }
//     return newArr;
// }

// const myMapArray = arr.myMap(function(number,index,arr){
//     console.log("this inside myMapArray",this); //global Obj
//     console.log("arr inside myMapArray: ",arr);
//     return number*index;
// })

// console.log(myMapArray);

// Array.filter polyFill

// const arr = [2,4,5,13,20];

// Array.prototype.myFilter = function(cb){
//     let newArr = [];
//     for(let i = 0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// const filterArray = arr.filter(function(number,index,arr){
//     return number%2;
// })

// const myFilterArray = arr.myFilter(function(number,index,arr){
//     return number%2;
// })

// console.log(myFilterArray);

// array reduce polyFill

const arr = [1, 2, 3, 40];

// Array.prototype.myReduce = function(cb,initialValue){
//     let val = initialValue;
//     for(let i =0;i<this.length;i++){
//         val = cb(val,this[i],this);
//     }
//     return val;
// }

// function summation(acc,curr,arr){
//     acc += curr;
//     return acc;
// }

// const newArr = arr.reduce(summation,100);

// const myReduceArray = arr.myReduce(summation,100);

// console.log(newArr);
// console.log(myReduceArray);

function greet(name) {
  console.log(`Hello ${name}`);
}

const person = {
  name: "Pratyaksh",
};

function myMemoize(cb) {
  let res = {};
  return function (...args) {
    let inputString = JSON.stringify(args);
    if (!res[inputString]) {
      res[inputString] = cb(...args);
    }
    return res[inputString];
  };
}

// this methods

// function greet(place){
//     console.log(`Hello ${this.name}, have a good day at ${place}`);
//     return;
// }

// const person = {
//     name: "Pratyaksh"
// }

// greet.call(person,"home");
// greet.apply(person,["work"]);
// greet.bind(person);

// greet();

// call polyfill
// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callable");
//   }
//   context.fn = this;
//   return context.fn(...args);
// };

// const person = {
//     name: "Pratyaksh",
//     age: 23
// }

// function greet(place){
//     console.log(`Hello ${this.name} of ${this.age} years at `+ place);
//     return;
// }

// greet.myCall(person,"place");

// apply polyFill
// Function.prototype.myApply = function (context = {}, argsArray = []) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callable");
//   }

//   if(!Array.isArray(argsArray)){
//     throw new Error(this + "It's not an array");
//   }
//   context.fn = this;
//   return context.fn(...argsArray);
// };

// const person = {
//     name: "Pratyaksh",
//     age: 24
// }

// function greet(place){
//     console.log(`Hello ${this.name} of ${this.age} years at `+ place);
//     return;
// }

// greet.myApply(person,["place"]);

// bind polyFill
// Function.prototype.myBind = function(context={}, ...args){
//     if(typeof this !== 'function'){
//         throw new Error(this + " cannot be bound as it's not callable");
//     }
//     context.fn = this;
//     return function(...newArgs){
//         context.fn(...newArgs);
//     };
// }

// const person = {
//     name: "Pratyaksh",
//     age: 24
// }

// function greet(place){
//     console.log(`Hello ${this.name} of ${this.age} years at `+ place);
//     return;
// }

// const pratyakshGreet = greet.myBind(person);
// pratyakshGreet("Hisar");

// memoize function

// function myMemoize(fn,context){
//     let res = {};
//     return function(...args){
//         const inputString = JSON.stringify(args);
//         if(!res[inputString]){
//             res[inputString]=fn.call(context||this,...args);
//         }
//         return res[inputString];
//     }
// }

// const expensiveFunction = function(num1){
//     let ans= num1;
//     for(let i =0 ;i<10000000000;i++){
//         ans+=i;
//     }
//     return ans;
// }

// const lessExpensiveFunction = myMemoize(expensiveFunction);
// console.time("First call");
// lessExpensiveFunction(100);
// console.timeEnd("First call");
// console.time("Second call");
// lessExpensiveFunction(100);
// console.timeEnd("Second call");

// Promise polyFill

// function PromisePolyFill(executor){
//     let onResolve,
//     onReject,
//     isFulfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//     function resolve(val){
//         isFulfilled = true;
//         value = val;

//         if(typeof onResolve === 'function'){
//             onResolve(val);
//             isCalled = true;
//         }
//     }

//     function reject(val){
//         isRejected = true;
//         value = val;
//         if(typeof onResolve === 'function'){
//             onReject(val);
//             isCalled = true;
//         }
//     }

//     this.then = function(callback){
//         onResolve = callback;

//         if(isFulfilled && !isCalled){
//             isCalled = true;
//             onResolve(value);
//         }

//         return this;
//     }

//     this.catch = function(callback){
//         onReject = callback;

//         if(isRejected && !isCalled){
//             isCalled = true;
//             onReject(value);
//         }
//         return this;
//     }

//     try{
//         executor(resolve,reject);
//     }catch(error){
//         reject(error);
//     }
// }

// const examplePromise = new PromisePolyFill(function (resolve, reject) {
// //   setTimeout(function () {
//     resolve(2);
// //   }, 2000);
// });

// examplePromise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

//   Sync case

// resolve happens before .then

// Value stored

// .then executes callback immediately

// Async case

// .then registers callback first

// resolve executes callback later

// Promise.all polyFill

// Promise.allPolyfill = function(promises){
//     return new Promise(function(resolve,reject){
//         let results = [];
//         if(!promises.length){
//             resolve(results);
//             return;
//         }
//         let pendingPromise = promises.length;
//         promises.forEach(function(promise,idx){
//             Promise.resolve(promise).then((res)=>{
//                 results[idx]=res;
//                 pendingPromise--;
//                 if(pendingPromise===0){
//                     resolve(results);
//                     return;
//                 }
//             }).catch(()=>reject());
//         })
//     })
// }

// debounce polyfill

// const myDebounce = function(cb,delay){
//     let timer;

//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cb(...args);
//         },delay);
//     }
// }

// const debounceCount = myDebounce(()=>{
//     console.log(12);
// },500);

// throttle Polyfill

// const myThrottle = function(cb,delay){
//     let last = 0;

//     return function(...args){
//         let now = new Date().getTime();
//         if(now-last>delay){{
//             last = now;
//             cb(...args);
//         }}
//         return;
//     }
// }

// function PromisePolyFill(executor) {
//   let val,
//     onResolve,
//     onReject,
//     onFinal,
//     isFulfilled = false,
//     isCalled = false;
//   function resolve(value) {
//     val = value;
//     isFulfilled = true;
//     if (typeof onResolve === "function") {
//       onResolve(val);
//       isCalled = true;
//       typeof onFinal === 'function' && onFinal();
//     }
//     return val;
//   }
//   function reject(value) {
//     val = value;
//     isFulfilled = true;
//     if (typeof onReject === "function") {
//       onReject(val);
//       isCalled = true;
//       typeof onFinal === 'function' && onFinal();
//     }
//     return val;
//   }
//   this.then = function (cb) {
//     onResolve = cb;
//     if (isFulfilled && !isCalled) {
//       isCalled = true;
//       cb(val);
//       typeof onFinal === 'function' && onFinal();
//     }
//     return this;
//   };
//   this.catch = function (cb) {
//     onReject = cb;
//     if (isFulfilled && !isCalled) {
//       isCalled = true;
//       cb(val);
//       typeof onFinal === 'function' && onFinal();
//     }
//     return this;
//   };
//   this.finally = function (cb) {
//       onFinal = cb;
//     if (isCalled) {
//       if (isCalled) {
//         onFinal();
//       }
//     }
//     return this;
//   };
//   try {
//     executor(resolve, reject);
//   } catch (err) {
//     reject(err);
//   }
// }

// const p = new PromisePolyFill(function (resolve, reject) {
//     // setTimeout(function(){
//   resolve(2);
//     // },2000);
// });

// p.then((val) => console.log(val * 2))
//   .catch((err) => console.log(88))
//   .finally(() => console.log("DONE"));

// // const obj = {
// //     name : "PRATYAKSH",
// //     greet : function(){
// //         console.log("HELLO   "+this.name);
// //     }
// // }
// // obj.greet();

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("BAAD MEI AANA");
  }, 2000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
   reject("BAAD MEI AANA");
  }, 1000);
});
const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("BAAD MEI AANA");
  }, 0);
});
const p4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve(2);
    reject("BAAD MEI AANA");
  }, 3000);
});
const p5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve(8);
    reject("BAAD MEI AANA");
  }, 1000);
});

Promise.allPromises = function (promises) {
  return new Promise(function (resolve, reject) {
    let res = [];
    if (promises.length === 0) {
      resolve(res);
      return;
    }
    let pendingPromises = promises.length;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((response) => {
          pendingPromises--;
          res[idx] = response;
          if (pendingPromises === 0) {
            resolve(res);
            return;
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.allSettledPromises = function (promises) {
  return new Promise(function (resolve, reject) {
    let res = [];
    if (promises.length === 0) {
      resolve(res);
      return;
    }
    let pendingPromises = promises.length;
    promises.forEach(function (promise, idx) {
      Promise.resolve(promise)
        .then(function (response) {
          res.push({ status: "fulfilled", value: response });
          pendingPromises--;
          if (pendingPromises === 0) {
            resolve(res);
            return;
          }
        })
        .catch(function (err) {
          res.push({ status: "failed", err: err });
          pendingPromises--;
          if (pendingPromises === 0) {
            resolve(res);
            return;
          }
        });
    });
  });
};

Promise.racePromise = function (promises) {
  return new Promise(function (resolve, reject) {
    if (promises.length === 0) {
      resolve(res);
      return;
    }
    promises.forEach(function (promise, idx) {
      Promise.resolve(promise)
        .then(function (response) {
          resolve(response);
          return;
        })
        .catch(function (err) {
            reject(err);
            return;
        });
    });
  });
};

Promise.anyPromise = function (promises) {
  return new Promise(function (resolve, reject) {
    let failedArray = [];
    if (promises.length === 0) {
      resolve(res);
      return;
    }
    let pendingPromises = promises.length;
    promises.forEach(function (promise, idx) {
      Promise.resolve(promise)
        .then(function (response) {
          return resolve(response);
        })
        .catch(function (err) {
            failedArray[idx]=err;
            pendingPromises--;
            if(pendingPromises===0){
                reject(new AggregateError(failedArray,"All errors are in array"));
                return;
            }
          return;
        });
    });
  });
};

async function getPromises() {
  //    const promiseResponse1 = await Promise.allPromises([p1,p2,p3,p4,p5]);
  //   const promiseResponse2 = await Promise.allSettledPromises([
  //     p1,
  //     p2,
  //     p3,
  //     p4,
  //     p5,
  //   ]);
//   const promiseResponse3 = await Promise.racePromise([p1, p2, p3, p4, p5]);
    const promiseResponse4 = await Promise.anyPromise([p1, p2, p3, p4, p5]);
  //    console.log(promiseResponse1);
  //   console.log(promiseResponse2);
//   console.log("RACE",promiseResponse3);
    console.log("ANY",promiseResponse4);
}

getPromises();

// Promise.allPolyfill = function(promises){
//     return new Promise(function(resolve,reject){
//         let results = [];
//         if(!promises.length){
//             resolve(results);
//             return;
//         }
//         let pendingPromise = promises.length;
//         promises.forEach(function(promise,idx){
//             Promise.resolve(promise).then((res)=>{
//                 results[idx]=res;
//                 pendingPromise--;
//                 if(pendingPromise===0){
//                     resolve(results);
//                     return;
//                 }
//             }).catch(()=>reject());
//         })
//     })
// }
