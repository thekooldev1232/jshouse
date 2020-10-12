
// ###### let's come to this later 
document.addEventListener('DOMContentLoaded', () => {
    console.log('this is dom');
    let name = document.querySelector('#name');
    let address = document.querySelector('#address');
    let details = document.querySelector('.details');
    let addButton = document.querySelector('.adduser');

    addButton.addEventListener('click',addUser);

    function addUser(name, address) {
        console.log(name);
        console.log(address);
        let detailsObj = {
            name: name.value,
            address: address.value
        }
        localStorage.setItem('details', JSON.stringify(detailsObj));
        console.log(localStorage.getItem('details'));
    }

    function getUser() {
        if (localStorage.getItem('details')) {
            let detailsObj = JSON.parse(localStorage.getItem('details'));
            detailsObj.map((detail) => {
                let node = document.createElement('div')
                node.value = `${detail.name} - ${detail.address}`
                details.appendChild(node)
            });
        }
    }

    function removeStorage() {

    }

    getUser();
})
