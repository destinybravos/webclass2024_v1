let theList = document.getElementById('my-list');
let btnSave = document.getElementById('btn_save');
let textInput = document.getElementById('text_input');

let itemArray = [];

let displayList = () => {
    let items = '';
    itemArray.forEach((item) => {
        items += `<li> ${item} </li>`
        // console.log('inside: ',items);
    })
    // console.log('outside: ', items);
    theList.innerHTML = items;
}

btnSave.addEventListener('click', () => {
    let value = textInput.value;

    if (value.trim() != '') {
        itemArray.push(value);
        displayList();
        textInput.value = '';
    }
});


