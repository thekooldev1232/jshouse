
let display = document.getElementsByClassName('result')[0];
display.innerText = '';
function firesome(e) {
    if (e.target.nodeName === 'BUTTON'){
        if(e.target.innerText === 'C'){
            display.innerText = '';
            return;
        }
        display.innerText += e.target.innerText;
    } 
        
}

function compute() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = '';
    }
}