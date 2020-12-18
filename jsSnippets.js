
// ###### to reverse a string ########

/* function revStr1(str){
    return str.split('').reverse().join('');
}

console.log(revStr1('sai'));

function revStr2(str) {
    return [...str].reverse().join('');
}

console.log(revStr2('sai'));

function revStr3(str) {
    let rev = '';
    for(let i=str.length -1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}

console.log(revStr3('sai')); */


// ######## series printing #######

/* function SeriesSum(n) {
    let ser, acc = 0;
    while (n > 0) {
        ser = 1 / (3 * (n - 1) + 1)
        acc = acc + ser;
        n--;
    }
    return acc.toFixed(2);
}

console.log(SeriesSum(3)); */


//######### print n number of time string 


/* function repeatStr (n, s) {
    let finalStr = '';
     while(n>0){
       finalStr += s;
       n--;
     }
     return finalStr;
   } */


//###### remove elements in the array from another array

/*    function arrayDiff(a, b) {
    return a.filter((i)=> {
       return !b.includes(i)
     })
   } */
/* function reverseWords(str) {
    return str.split(' ').reduce((acc, i) => acc + i.split('').reverse().join('') + ' ', '').trim();

}

console.log(reverseWords('hey this is so cool')) */





