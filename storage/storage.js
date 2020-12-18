
// ###### let's come to this later 

let name, address, details, addButton, detailsArray=[];

document.addEventListener('DOMContentLoaded', () => {

    console.log('this is dom');
    name = document.querySelector('#name');
    address = document.querySelector('#address');
    details = document.querySelector('.details');
    addButton = document.querySelector('.adduser');

    getUser();
});

function addUser() {
    console.log(name);
    console.log(address);
    let detailsObj = {
        name: name.value,
        address: address.value
    }
    detailsArray = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')):  detailsArray;
    detailsArray.push(detailsObj)
    localStorage.setItem('details', JSON.stringify(detailsArray));
    console.log(localStorage.getItem('details'));
}

function getUser() {
    if (localStorage.getItem('details')) {
        let detailsObj = JSON.parse(localStorage.getItem('details'));
        detailsObj.map((detail) => {
            let node = document.createElement('div')
            let nameText = document.createTextNode(detail.name);
            let addressText = document.createTextNode(detail.address);
            node.appendChild(nameText);
            node.appendChild(addressText);
            details.appendChild(node);
        });
    }
}

function removeStorage() {
    // we will remove some users when we click on the item
    /*  well this can be done - but the source is not known */
}



