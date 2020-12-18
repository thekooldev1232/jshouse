const reduceFun = (...arr)=> {
    return [...arr].reduce((acc, val)=> acc*val,1);
}

console.log(reduceFun([1,2,4]));
console.log(reduceFun(1,2,3));