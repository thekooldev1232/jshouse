/* 
// ##### Destructuring 

//1) Object destructing 

//not good
function iamAssingPropertiesBad(info) {
    let name = info.name;
    let address = info.address;
    console.log(name, address);
}

// good

function iamAssingPropertiesGood(info) {
    let { name, address } = info;
    console.log(name, address);
}


// best

function iamAssingPropertiesBest({ name, address }) {
    console.log(name, address);
}


iamAssingPropertiesBad({ name: 'thekooldevguy1232', address: { country: 'USA', state: 'CA', city: 'sanjose' } });
iamAssingPropertiesGood({ name: 'thekooldevguy1232', address: { country: 'USA', state: 'CA', city: 'sanjose' } });
iamAssingPropertiesBest({ name: 'thekooldevguy1232', address: { country: 'USA', state: 'CA', city: 'sanjose' } });

// 2) Array destructing 

const sourceArr = [1, 2, 3, 4];

// bad

const first = sourceArr[0];
const second = sourceArr[1];

console.log(first, second);

// good

const [one, two, ...rest] = sourceArr;

console.log(one, two, rest);

// 3)  Use Object destructing to return something than array destructing 


function returnArray(user){

    const [first,second, third] = user;
    return [first,second, third];
}

let [one1, third3, two2] = returnArray([1,2,3])

console.log({'one1':one1, 'third3': third3, 'two2':two2});

function returnObj(user){

    const [firstone,secondone, thirdone] = user;
    return {firstone,secondone, thirdone};
}

let {firstone, thirdone, secondone} = returnObj([1,2,3])

console.log({'one1':firstone, 'two2':secondone, 'third3': thirdone}); */





// ###################################################################

//########## Objects #################

// 1) Objects

// bad

let objInstatiate = new Object()

// Good

let objLiteral = {};

// 2) use short hands for function name and properties inside the Object


// bad
let nestedObj = {
    a: 1,
    b: 'two',
    funNew: function (arguments) {
        console.log(arguments);
    }
}

// good -> always keep short hand properties on the top as a best practice
let shortHandObject = {
    funNew(arguments) {
        console.log(arguments);
    },
    a: 1,
    b: 'two',

}


// 3) Always use rest and spread operators to clone and copy objects

// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

