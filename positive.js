function positiveSum(arr) {
    return arr.filter((r) => r > 0).reduce((acc, i) => acc + i,0)
}

console.log(positiveSum([1,2,4,-11,0]));
