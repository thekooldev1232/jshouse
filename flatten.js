//  🤞 here I have used some to break out of the array, if matches then breaks, instead you can use every - so some vs every vs foreach
/* function flattenArray(arr) {
  let flatArray = [];
  iterateArray(arr);
  function iterateArray(arr) {
    arr.some((value) => {
      if (Array.isArray(value)) {
        iterateArray(value);
        return true;
      }
      flatArray.push(value);
    });
  }
  return flatArray;
} */

//  let's do it using reduce
// 👌❤️previousValue.concat(flattenArray(currentValue)) when the recursive function calls this, we gonna make sure we add the value to the existing prev array - that's why we wrap this around

/* const flattenArray = (arr) => {
  return arr.reduce((previousValue, currentValue) => {
    return Array.isArray(currentValue)
      ? previousValue.concat(flattenArray(currentValue))
      : previousValue.concat(currentValue);
  }, []);
}; */

// 💡javascript way
/* function flattenArray(arr) {
  return arr.flat(Infinity);
} */

// 🚀 To sum all the elements from the flatten array
/* function SumflattenArray(arr) {
  return arr.reduce((previousValue, currentValue) => {
    previousValue = Array.isArray(currentValue)
      ? previousValue + flattenArray(currentValue)
      : previousValue + currentValue;
    return previousValue;
  });
} */

// 🚀  TODO To remove duplicates from Flatten Array
function removeDuplicatesFlatArr(arr) {
  return arr.reduce((previousValue, currentValue, currentIndex, array) => {
    previousValue =  Array.isArray(arr)
      ? previousValue.concat(removeDuplicatesFlatArr(currentValue))
      : [...previousValue.add(currentValue)];
      return previousValue;
  }, new Set());
}

//console.log(flattenArray([1, 3, [1,[4,5,[55,44]]]]));
//console.log(SumflattenArray([1, 3, [1,[4,5,[55,44]]]]));
console.log(removeDuplicatesFlatArr([1, 3, [1,[4,5,[55,44]]]]));
