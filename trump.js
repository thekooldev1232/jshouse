// count
/* function trumpDetector(trumpySpeech){
 
    let trump = trumpySpeech.match(/[aeiou]/ig);
    let nonTrump = trumpySpeech.match(/[^aeiou\s]/ig);
    let trumpyLength = trump.length/nonTrump.length;
    return trumpyLength >= 1 ? `this is so trumpy man! - length ${trump.length}` : `hey he is not trump :) safe here! - length ${nonTrump.length}`
  }

  console.log(trumpDetector('heyeeeeee thieeeeeiiis meuuuuuuuuuuuuuuuuuuuiiiiieeeeooooo trumppppp')); */


// triple x
/* function tripleX(str) {
  return str.match(/x{3,}/g) ? true : false;
}

console.log(tripleX('fjdfhxxx djkhxxxx fhjksfhuihdkjxxxx'));
console.log(tripleX('fjdfhxxx djkhxxxxxxxxxxx fhjksfhuihdkjxxxx'));
console.log(tripleX('fjdfhx also shfksjxx  fhjksfhuihdkjxx')); */

//Before and after odd integer add '-'

// function dashatize(num) {
//     num.replace(/.*/g, function(match, offset, string){
//             console.log(match);
//             console.log(offset);
//     })
//   }

//   console.log(dashatize('sai here'));
//   console.log(dashatize('skfhsk skfhsdkfhiefy'));


// TODO -> remove consecutive duplicate words
// split the str in to array 
// now iterate this array and keep populating another one, making sure the last doesn't match the inserted 
// push to the end - check if it is same and the one in the loop, if yes then don't push in to it
/* function removeConsecutiveWords(str) {
    if(typeof str === 'string'){
        let outputArry = [];
        str.split(' ').forEach((value, index, array) => {
            if(value !== outputArry[outputArry.length-1])
            outputArry.push(value);
        })
    
        return outputArry.join(' ');
    }
    return 'Invalid input, only strings accepted!'  
} */


// 💡const removeConsecutiveDuplicates = s => s.replace(/(\b\S+)( \1\b)+/g, '$1')

// 💡const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

// console.log(removeConsecutiveWords('hey there sfshfj shjfsfjk'));
// console.log(removeConsecutiveWords('hey there there sfshfj sfshfj sfshfj shjfsfjk'));
// console.log(removeConsecutiveWords('1 2 3 3 55 55 6 9 0'));

// TODO 
// deletes all the vowels,
// inserts a character "." before each consonant,
// replaces all uppercase consonants with corresponding lowercase ones.

// algo 👉 use regex [^aeiouAEIOU] -> match consonents and repalce with .c -> make lower case

function stringTask(s){
 return s.match(/[^aeiouAEIOU]/ig).join('').replace(/.*/ig,(x)=> x.toLowerCase());
}

console.log(stringTask('hey TheRe'));