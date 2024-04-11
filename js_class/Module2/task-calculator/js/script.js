// Declare variable for holding the screen elements
let display = document.getElementById('main_display');
let tempDisplay = document.getElementById('temp_display');

// Add an event listener to all the number buttons
let numBtns = document.querySelectorAll('.num_btn');
// let numBtns = document.getElementsByClassName('num_btn'); // Can not use foreach on this.

numBtns.forEach((nButton) => {
    nButton.addEventListener('click', (ev) => {
        display.innerText += ev.target.textContent;
    })
});

// Clear Screen (Main Display)
document.getElementById('cls').addEventListener('click', () => {
    display.innerText = '';
})

// Backspace 
let backSpace = () => {
    // Example of Reducing the string lenght using slice or substring
    // let word = 'programmer';
    // console.log(word.length);
    // console.log(word);
    // console.log(word.slice(0, word.length - 1));
    // console.log(word.substring(0, word.length - 1));

    let word = display.innerText;
    display.innerText = word.slice(0, word.length - 1);
}

document.getElementById('bksp').addEventListener('click', backSpace)


document.addEventListener('keyup', (ev) => {
    let key = ev.key;
    let keyCode = ev.keyCode;

    switch (key) {
        case "Backspace":
            backSpace();
            break;

        case "Enter":
            // todo: Perform total/result operation
            break;
    
        default:
            break;
    }

    // Handling the numeric keys
    if (keyCode >= 48 && keyCode <= 57) {
        display.innerText += key;
    }
})

// Add an event listener to all the Operator buttons
let btnOperator = document.querySelectorAll('.btn_operator');

btnOperator.forEach((opButton) => {
    opButton.addEventListener('click', (ev) => {
        let operator = ev.target.textContent;
        tempDisplay.innerText = display.innerText + " " + operator;
    })
});


// document.getElementById('result_btn').addEventListener('click', () => {
    
// })