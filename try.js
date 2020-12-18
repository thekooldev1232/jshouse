// if(!NaN) console.log('hey this is good');
// NOTE ###########################################################################################################
//if(undefined ?? 2) console.log('hey');
//NOTE ###########################################################################################################
//  🎚 💡 switch
//  used to test multiple ifs
//  if you don't use break, it might execute everything after it and stops till the break is seeen

const { strict } = require("assert")

/* let x = 10;

switch (x) {
  case 10:
    console.log("hey 10");
  case 12:
    console.log("hey 12");
    break;
  default:
    console.log("hey default");
} */
//NOTE ###########################################################################################################
//   ?? and || are similar only that ?? will accept null, '', false, 0 etc -> that means ?? only accepts filters the undefined and undeclared

// functions - especially the parameters the default options is taken when no parameter is passed to it -> always evaluted first
//  good to name functions with actions - verbs especially

// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..)

//🔻 get Min value
/* function getMinimum(a,b) {
    return a>b?b:a;
}

console.log(getMinimum(1,2));
console.log(getMinimum(4,-2));
console.log(getMinimum(13,5));
console.log(getMinimum(99,-4));
//NOTE ###########################################################################################################
*/

//get power of a number
/* function powerOfNumber(n,m) {
    return n ** m;
} 

console.log(powerOfNumber(3,3));
console.log(powerOfNumber(3,4));
console.log(powerOfNumber(3,10)); */

//NOTE ###########################################################################################################

//  Optional chaining is a cool concept to extract the property of the Object when it exists
// The optional chaining ?. stops the evaluation if the part before ?. is undefined or null and returns that part

/* let user = {
  name: "sai",
  address: {
    city: "hyderabad",
    area: {
      pin: 500060,
    },
  },
}; */

// there are 3 ways to do this

// 1️⃣
/* let pin = user.address
  ? user.address.area
    ? user.address.area.colony
    : null
  : undefined;
console.log(pin); */

// 🥈

/* let pin = user.address && user.address.area && user.address.area.pin;
console.log(pin); */

// 👍 optional chaining -> this is powerful, use only when it is needed - when ever you feel like something is necessary
// you can call methods and objects -> ?.() & ?.[]
/* let pin = user?.address?.area?.pin
console.log(pin); */

//We can use ?. for safe reading and deleting, but not writing

//###########################################################################################################

//  symbols
// NOTE Usecases : used to create ids in the objects, used to create constants in code

/* let id = Symbol('id');
let id2 = Symbol('id2');
console.log(id);
console.log(id2); */

// NOTE ###########################################################################################################
// Objects can be used

/* let date1 = new Date();

setTimeout(() => {
  let date2 = new Date();
  console.log(date1);
  console.log(date2);
  console.log(date2 === date1);
  console.log(date2 - date1);
}, 2000); */

/* let user = {'name':'sai'};
let user2 = {'name':'hareesh'};
console.log(Number(user));
console.log(Number(user2));
console.log(user2-user); */

// primitive types - strings, numbers, boolean, symbols, bigInt,       undefined, null
// primitives will have methods on them expect undefined and null. Now they are accessed via js internal creation of 👌temporary objects -> some thing like this 👉   let obj = new String(); let num = new Number(); let flag = new Boolean()

/* let bol = new Boolean();
bol = 'hey'; // 💡 here you can change the created type also 
console.log(bol); */

// NOTE numbers
/* 
let n = 4;
console.log(typeof n); */

//few important methods -> 💡 Math.random(), Math.max(), Math.min(), Math.floor(), Math.ceil(), Math.round(), Math.trunc()

// NOTE Strings

// Strings have the following methods
// To extract - slice(startInd, endInd) - negatives allowed, subString(startInd, endInd)  - no negatiaves, subStr(startInd, endInd) - start is negative
// 💡 To check - startwith, endwith, includes()
// trim()
// repeat()
// 💡 all the characters in the string are represented in the UTF-16 format - so to get the characters from the numeric representation - String.fromCodePoint(char), char.codePointAt(0)

/* let str = 'heythere'
for(let i=0;i<str.length;i++){
  //console.log(typeof str[i]);
  console.log(str[i].codePointAt(0));
} */

// NOTE Maps and Sets

/* let map = new Map();

map.set('1',true)
map.set(true,true)
map.set('false',0)
map.set(new Date,true)

console.log(map.keys());
console.log(map.values());
console.log(map.entries()); */

// 💡 Both the set and map has some methods which are very useful
// add, delete, has, clear, size

// NOTE 💡 Objects
// objects are reperesented in key/value pairs. The following are few important methods
// 👇
// Object.keys(obj) -> this return array of keys
// Object.keys(values) -> this returns array of values
// Object.keys(obj) -> this returns array of objs -> objs inside objs

// sum salaries of ppl in the following obj
/* let  user1 = 'hey'
let obj = { user1: 100, user2: 200, user3: 300 };
console.log('to sum all the sals in userobj ',Object.values(obj).reduce((userSal, acc)=>userSal+acc));
console.log('to count number of enteries in obj ',Object.values(obj).length); */

//NOTE  destructuring
//💡 this pattern is aliasing and also defaulting the values out of an object
/* let objDestructuring = { user2: "anoop" };
let { user1: sai = "ramesh", user2: anoop } = obj1; 
console.log(sai, anoop); */

/* let arrDestructuring = [1,2,3,4];
let [one, two, ...all] = arrDestructuring;
console.log(one, two, ...all); */

/* function consumeArray([one, two, three, ...all=[]]) {
  console.log(one, two, three, ...all);
}

console.log(consumeArray([1,2,3,4,5,6])); */

//NOTE json
// It is independent of the language -> used primarily to transport the data
// JSON supports strings, null, objects, arrays, numbers, boolean

//NOTE functions recurrsion

/* let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
}; */

//fib - 0,1,1,2,3,5,8,13,21.....
// TODO recurrsion is fun and a must improvement - many usecases

/* function getFibFirstN(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return "0";
    case 2:
      return "0 1";
    default:
      let first = 0,
        second = 1,
        third,
        series = [0, 1];
      while (n >= 3) {
        third = first + second;
        series.push(third);
        first = second;
        second = third;
        n--;
      }
      return series.join(" ");
  }
}


console.log(getFibFirstN(10));
console.log(getFibFirstN(15));
console.log(getFibFirstN(7));
console.log(getFibFirstN(5));
console.log(getFibFirstN(-1)); */

//👌 Linked List

/* let linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

function printLinkedList(list) {
  console.log(list.value);
  while (list.next) {
    list = list.next;
    console.log(list.value);
  }
}

console.log(printLinkedList(linkedList)); */

// function noReturn(arguments) {

// }

// alert(noReturn());



// let details = {name:'sai',age:34}

// let newObj = details;
// newObj.name = 'hari';

// console.log(details);


function loveGenerator() {
  n = Math.round(Math.random()*10);
  switch (true) {
    case (n > 7):
      console.log('I love you Baba ❤️💃 \n');
      break;
    default:
      console.log('I love you AK ❤️🕺 \n');
      break;
  }
}  

loveGenerator();