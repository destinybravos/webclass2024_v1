// Add an event listener to all the number buttons
let numBtns = document.querySelectorAll('.num_btn');
// let numBtns = document.getElementsByClassName('num_btn'); // Can not use foreach on this.

numBtns.forEach((nButton) => {
    nButton.addEventListener('click', (ev) => {
        let display = document.getElementById('main_display');
        display.innerText += ev.target.textContent;
    })
});

// document.addEventListener('keyup', (ev) => {
//     console.log(ev.keyCode);
// })