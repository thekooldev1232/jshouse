/* function tribonacci(signature,n){
  //your code here
  let i=0;let series=[...signature];
  if(Array.isArray(signature) && signature.length===3 && n>0){
    while(series.length!==n){
      series.push(series[i]+series[i+1]+series[i+2]);
      i++;
    }
  }else {
    return [];
  }
  return series;
}

console.log(tribonacci([1,2,3],10)); */

//AAA 001 - ZZZ 999

// 1 to 999

// 65 to 90

// weak in recursion thinking - so got to improve
// todo: this needs some solid recursive thinking
/* function makeSeries() {
  for(let i=0;i<=999;i++){
    makeSeries(i);
  }

  function makeSeries(i) {
    for(let j=65;j<=90;j++){
      for(let k=65;k<=90;k++){
        for(let l=65;l<=90;l++){
          console.log(`${String.fromCharCode(j)}${String.fromCharCode(k)}${String.fromCharCode(l)}-${i}`);
        }
      }
    }
  }
}

console.log(makeSeries()); */

// To develop the birthday number

// 1986-11-07 -> 1+9+8+6, 1+1, 0+7 -> until you see a single digit you do the sums

// regex to check the input

// fun -> sums it up and return -> this needs to recursively called until we find a single digit

// todo: this below code is running, but can be optimized a ton -> got to work on quality
/* function birthdayNumber(date) {

  if (!/\d{4}-\d{2}-\d{2}/.test(date)) return "not a valid date";
  let totals = '';
  totals = date.split("-").map((item) => {
     return sumDate(item);
  }).reduce((i,acc)=>i+acc)

  function sumDate(n) {
    let sum = n.split("").reduce((i, acc) => parseInt(i) + parseInt(acc));
    return sum.toString().length > 1 ? sumDate(sum.toString()) : paresInt(sum);
  }

  return sumDate(totals.toString());
} */

/* function birthdayNumber(dateOfBirth){
  return dateOfBirth.replace(/\D/g,'') % 9 || 9;
}

console.log(birthdayNumber("1987-11-12"));
console.log(birthdayNumber("1950-99-87"));
console.log(birthdayNumber("1950-19-85")); */

// check how map and chainging works actually



