// const arr = [1,4,7,9, 10, 12];

// Array.prototype.myFilter = function(cb){
//     let result = [];
//     if(this.length === 0){
//         return result;
//     }

//     for(let i =0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// const resultantArray = arr.myFilter(function(curr,idx){
//     return curr%2===0;
// });

// console.log(resultantArray);

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("C");
//   })
//   .then(() => {
//     console.log("D");
//   });

// console.log("E");

// setTimeout(() => {
//   console.log("F");
// }, 0);

// console.log("H");

//OUTPUT: A E H C D B F

//webAPIS:
//microtask queue: C D
//macrotask queue: B F

// localstorage ->  many visits -> XSS
// sessionStorage -> 1 visits -> XSS(Cross site scripting) -> CSP(content security policy) -> self
// cookies -> not at threat by xss but these are at threat CSRF(cross site request forgery) -> sameSite: laz/strict

//searchFilter-> hitting api-> optimize

//type= text

// debounce
//book -> 4 times

//throttle vs debounce
// throttle -> first serve -> wait out period
//debounce -> last serve -> time diff b/w the inputs

//3 phases
// event capturing-> trickling -> top down
// target event
// event bubbling-> bottom up events

//grandparent onClick
//parnet onClick
//child onClik

// Output

// {
//   C1: {
//     categories: {
//       Electronics: { totalAmount: 350, count: 2 },
//       Clothing: { totalAmount: 80, count: 1 }
//     },
//     mostSpentCategory: "Electronics"
//   },
//   C2: {
//     categories: {
//       Clothing: { totalAmount: 170, count: 2 },
//       Groceries: { totalAmount: 60, count: 1 }
//     },
//     mostSpentCategory: "Clothing"
//   },
//   C3: {
//     categories: {
//       Groceries: { totalAmount: 200, count: 1 }
//     },
//     mostSpentCategory: "Groceries"
//   }
// }

const transactions = [
  { customerId: "C1", category: "Electronics", amount: 200 },
  { customerId: "C1", category: "Clothing", amount: 80 },
  { customerId: "C1", category: "Electronics", amount: 150 },
  { customerId: "C2", category: "Clothing", amount: 120 },
  { customerId: "C2", category: "Groceries", amount: 60 },
  { customerId: "C2", category: "Clothing", amount: 50 },
  { customerId: "C3", category: "Groceries", amount: 200 },
];

const CATEGORIES = "categories";
const MOST_SPENT_CATEGORY = "mostSpentCategory";

const resultantObject = transactions.reduce(function (acc, curr) {
  if (!Object.keys(acc).includes(curr.customerId)) {
    acc[curr.customerId] = {
      [CATEGORIES]: {
        [curr.category]: {
          totalAmount: curr.amount,
          count: 1,
        },
      },
      [MOST_SPENT_CATEGORY]: undefined,
    };
  }
  if (Object.keys(acc[curr.customerId][CATEGORIES]).includes(curr.category)) {
    acc[curr.customerId][CATEGORIES][curr.category].totalAmount += curr.amount;
    acc[curr.customerId][CATEGORIES][curr.category].count += 1;
  } else {
    acc[curr.customerId][CATEGORIES] = {
      //   [CATEGORIES]: {
      [curr.category]: {
        totalAmount: curr.amount,
        count: 1,
      },
      //   },
    };
  }
  const customerMostSpentCategory = acc[curr.customerId][MOST_SPENT_CATEGORY];
  console.log("<<<<customerMostSpentCategory", customerMostSpentCategory);
  if (
    customerMostSpentCategory == undefined ||
    acc[curr.customerId][CATEGORIES][customerMostSpentCategory].totalAmount <
      acc[curr.customerId][CATEGORIES][curr.category].totalAmount
  ) {
    acc[curr.customerId][MOST_SPENT_CATEGORY] = curr.category;
  }
  return acc;
}, {});

console.log(resultantObject);
