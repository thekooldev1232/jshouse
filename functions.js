


// This is a basic function 

let i = 3;
function logSomething() {
    console.log('I am fun');
}

// This is a basic function expression 

const funExpression = () => {
    console.log('I am a fun expression');
}

console.log(global);



logSomething(); // ####### This can be accessed from anywhere with in the file


funExpression(); // This can run only after the expression has been declared 


/* 
 This is a iffy - two important reasons to have this 
################
 1) To scope the variables to it's own namespace instead of poluting the global namespace

 2) To immediately execute the fun  */


 (() => {
    console.log($);
    console.log('I am Iife');
    console.log('My scope is with in this');


    // This is to show that a variable always can be accessed from within the function - how deeply it can be nested to access it

 /*     ##################
    (() => { console.log(i); 
        (()=>{
            let i = 5; // the iffy inside has local scope dominated than global 
            console.log(i);
        })()
    })() */

    console.log(this);
})()