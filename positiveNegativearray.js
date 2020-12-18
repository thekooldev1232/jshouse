function countPositivesSumNegatives(input) {
    return [input.filter(n=>n>0).reduce((a,i)=>a+i,0),input.filter(n=>n<=0).reduce((a,i)=>a+i,0)]
  }

console.log(countPositivesSumNegatives([1,2,-5,4,-11]));