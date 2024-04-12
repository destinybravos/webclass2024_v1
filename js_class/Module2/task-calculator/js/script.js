// Declare variable for holding the screen elements
let display = document.getElementById('main_display');
let tempDisplay = document.getElementById('temp_display');
let startNew = false;
let newCompute = false;

// Add an event listener to all the number buttons
let numBtns = document.querySelectorAll('.num_btn');
// let numBtns = document.getElementsByClassName('num_btn'); // Can not use foreach on this.

numBtns.forEach((nButton) => {
    nButton.addEventListener('click', (ev) => {
        if (display.innerText == '0' || startNew == true) {
            display.innerText = ev.target.textContent; 
            startNew = false;
        } else {
            display.innerText += ev.target.textContent; 
        }
    })
});

// Clear Screen (Main Display)
document.getElementById('cls').addEventListener('click', () => {
    display.innerText = '';
})

// Clear all screens
document.getElementById('cls_all').addEventListener('click', () => {
    display.innerText = '';
    tempDisplay.innerText = '';
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
            computeResult();
            break;

        case "+" :
            document.getElementById('add').click();
            break;

        case "-" :
            document.getElementById('sub').click();
            break;

        case "*" :
            document.getElementById('mult').click();
            break;

        case "/" :
            document.getElementById('div').click();
            break;
    
        default:
            break;
    }

    // Handling the numeric keys
    if (keyCode >= 48 && keyCode <= 57) {
        if (display.innerText == '0' || startNew == true) {
            display.innerText = key; 
            startNew = false;
        } else {
            display.innerText += key; 
        }
    }
})

// Add an event listener to all the Operator buttons
let btnOperator = document.querySelectorAll('.btn_operator');

btnOperator.forEach((opButton) => {
    opButton.addEventListener('click', (ev) => {
        // save the operator in a variable
        let operator = ev.target.textContent;

        // tempDisplay.innerText += " " + display.innerText + " " + operator; // Accumulating all operations and values


        if (newCompute == true) {
            tempDisplay.innerText = display.innerText + " " + operator;
            newCompute = false;
        }else{
            // Evaluate the current value on the temparory display with the value in the main display
            let tempResult = eval((tempDisplay.innerText + display.innerText).replace('x', '*').replace('÷', '/').replace('=', operator));

            tempDisplay.innerText = " " + tempResult + " " + operator;
        }
        startNew = true;
    });
});

let computeResult = () => {
    tempDisplay.innerText = tempDisplay.innerText + " " + display.innerText;
    display.innerText = eval(tempDisplay.innerText);
    tempDisplay.innerText += ' =';
    startNew = true;
    newCompute = true;
}

document.getElementById('result_btn').addEventListener('click', computeResult)

// Memory Management using local storage
// Store into Memory
document.getElementById('mem_store').addEventListener('click', () => {
    if (display.innerText !== '') {
        localStorage.setItem('memory', display.innerText);
    }
})

// Recall the stored memeory
document.getElementById('mem_recall').addEventListener('click', () => {
    if (localStorage.getItem('memory') !== '' && localStorage.getItem('memory') !== undefined && localStorage.getItem('memory') !== null) {
        display.innerText = localStorage.getItem('memory');
    }
})
// Clear Memory
document.getElementById('mem_clear').addEventListener('click', () => {
    localStorage.removeItem('memory');
})

// Adjust memory btns styles
if (localStorage.getItem('memory') == '' && localStorage.getItem('memory') !== undefined && localStorage.getItem('memory') !== null) {
    document.getElementById('mem_recall').style.color = 'rgb(104, 104, 104)';
    document.getElementById('mem_clear').style.color = 'rgb(104, 104, 104)';
}