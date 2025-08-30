Object.keys(), Object.values(), Object.entries()

// function sumSalaries(obj) {
//   let sum = 0;
  
//   for(let value of Object.values(obj)) {
//     sum += value;
//   }
  
//   return sum; 
// }

// function sumSalaries(obj) {
//   return Object.values(obj).reduce((sum, el) => sum + el, 0);
// }

// console.log(sumSalaries(salaries));

function countKeys(obj) {
  let count = 0;
  
  for(let key of Object.keys(obj)) {
    console.log(key);
    count++;
  }
  
  return count;
}

// function countKeys(obj) {
//   let count = 0;
  
//   for(let key of obj) {    // obj is not iterable
//     count++;
//   }
  
//   return count;
// }

function countKeys(obj) {
  return Object.keys(obj).length;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
}

// console.log(countKeys(salaries));



//Destructuring arrays, objects

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
}

function topSalary(salaries) { 
  let maxSalary = 0;
  let name = null;

  for(let [user, value] of Object.entries(salaries)) {
    if(value > maxSalary) {
      maxSalary = value;
      name = user;
    };
  }
  
  return name;
}

topSalary(salaries);

//recursion

function sumTo(n) {
//   let sum = 0;
//   for(let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumTo(n) {
//   return (n == 1)? n: (n + sumTo(n-1));
// }

//  function sumTo(n) {
//   let array = Array.from(Array(n), (el, id) => id+1);
//   return array.reduce((sum, el) => sum + el, 0);
// }

// //arithmetic progression formula
// function sumTo(n) { 
//   return n * (n + 1) / 2;
// }
// console.log(sumTo(100));


//function factorial(n) {
//   return (n === 1)? n: (n * (factorial(n - 1)));
// }
// console.log(factorial(5));


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      }
    }
  }
}

// function printList(list) {  //logging only values, no inner objects
//   console.log(list.value);
//   if(list.next) printList(list.next)
// }

// function printList(list) { //TypeError: Cannot convert undefined or null to object
// Object.values(null) is an error
//   for(let value of Object.values(list)) {
//     console.log(value);
//     if (typeof value === 'object') printList(value);
//   }
// }

// function printList(list) {  //in reversed order
//   let tmp = list;
//   while(tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// function printList(list) {
//   if (list.next) printList(list.next);
//   console.log(list.value);
// }

// function printList(list) {
//   let arr = [];
//   let tmp = list;
  
//   while(tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
  
//   for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// console.log(printList(list));


//SCOPE
function makeCounter() {
  let count = 0;

  return function() {
    return ++count; // есть доступ к внешней переменной "count"
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());


