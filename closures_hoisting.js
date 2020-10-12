
console.log(a); //############ a will throw an error because it will go in to Temporal dead zone - does hoisting 
console.log(b);
// ####################################
/* 
Closures are pretty cool concepts in JS
It simply means the inner function still will have the access to the outer variable  */

let j = 10; // this can be accessed inside the closurefun, inside iffe

(()=>{
    let i = 5;

    let closurefun = ()=>{
        console.log(i);  // this is accessible  -> shows closure
        console.log(j); // see this is deeply accessed - shows that no matter where you are inside a fun chain, you have access to variables
    }

    closurefun();
})()

//console.log(i); // this will throw an errors, the scope of i is inside iffe


// ##################################


/*  Hoisting is a unique concept in js where your variable will float initially and they are accessed up */

let a =5;
var b = 10;