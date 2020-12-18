/* As a user I will give you the following object, can you please flatten  */

let personDetails = {
    name: 'sai',
    gender: {
        sex: 'male',
        transgender: 'no'
    },
    Address: {
        country: 'India',
        State: 'Telangana',
        Home: {
            address: {
                colony: 'vidyuthnagar',
                houseno: '1-9-66',
                roadno: '4'
            }
        }
    }
}
let parentKeymaker = '';
let parentValmaker = '';
let nestedObj = false;
let magicObj = {};

function magicFun(myobj,parent) {
    // now we traverse in the object and then flatten each level
    // if the key is a string, we stop there
    // if the key is not a string, we take the parent and keep concatinate
    // we might need to use the recursive operation to traverse the object
    let workingObj = Object.assign({}, myobj);
    for (key in workingObj) {
        if (typeof workingObj[key] === "object") {
            nestedObj = true;
            parentKeymaker += `_${key}`;
            parentValmaker += `[${key}]`
            magicObj(workingObj[key])
        } else {
            nestedObj = false;
            key = nestedObj ? parentKeymaker
            magicObj[parentKeymaker] = parentValmaker: magicObj[
        }
        return magicObj;
    }
}



