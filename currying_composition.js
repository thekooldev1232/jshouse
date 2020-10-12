

// #############

/* Currying and Composition are pretty much the same -> they give you a function and you can execute with the URLSearchParams */

function curry(a){
    console.log(a);
    return function(i){
        console.log(`will log here  - ${i}`);
    }
}

curry(2)(3);



