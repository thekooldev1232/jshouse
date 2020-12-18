

function parent() {
    console.log('parent');
}
function child(event) {
    event.preventDefault();
    console.log('child');
}
function grandParent() {
    console.log('grandparent');
}