// Declare the list item array and variable to reference the HTML OL Element 
let itemList = [];
let listElement = document.getElementById('list_items');
let itemInput = document.getElementById('items_input'); // Variable to referrence the input element.


// Create a method to insert values into the array
let insertIntoList = (item) => {
    if (item != '' && item != undefined) {
        itemList.push(item);
        displayList();
    }
}

// Create a method to display items on the HTML Order List (OL) element
let displayList = () => {
    let list = ''; // An empty list variable to hold all the items as loop through the itemList
    
    // Loop though the array and create an li element for each item
    itemList.forEach((item) => {
        list += `<li>
                    <span>${item}</span> 
                    <button class="del_btn" onclick="deleteItem(event)"><i class="fa fa-trash-alt"></i></button>
                </li>`; // Accumulate each item into the list variable
    })

    // assign the accumulated list into the HTML OL Element (listElement)
    listElement.innerHTML = list;
}

// Delete element from the array
let deleteFromList = (item) => {
    if (item != '' && item != undefined) {
        let newArray = []; // Create a new temporary

        // Loop through all the existing litem list
        itemList.forEach((listItem) => {
            // Create put the item into the new array if the item is not equal to the item on the list
            if (listItem !== item) {
                newArray.push(listItem);
            }
        })

        // replace the item list with the new temporary array
        itemList = newArray;

        // Dsiplay the new result of the item list
        displayList();
    }
}

// Add event listener to the input to listen to the onKeyUp event
itemInput.addEventListener('keyup', (ev) => {
    // check if the key pressed if the enter key
    if(ev.key == "Enter"){
        // Insert the value of the item into the array list by calling the insertIntoList method
        insertIntoList(ev.target.value);
        ev.target.value = ""; // Empty the value in the target(input emlement)
    }
})


// Add Event Listener to all the delete buttons
let delBtns = document.querySelectorAll('button.del_btn');
delBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log("Hello");
    })
})

let deleteItem = (ev) => {
    let element = ev.target;
    let tagName = element.tagName.toLowerCase();
    let sibling = undefined;

    if (tagName == 'i') {
        sibling = element.parentElement.previousElementSibling;
    } else {
        sibling = element.previousElementSibling;
    }

    let value = sibling.innerText
    deleteFromList(value)
}