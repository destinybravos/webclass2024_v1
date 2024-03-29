let cleanCities = [
    'Asaba',
    'Port Harcourt',
    'Ughelli',
    'Warri',
    'Owerri',
    'Maitama',
    'Benin City',
    'Calabar',
    'Uyo'
];


// let isClean = cleanCities.find((cleanCity) => {
//     return city == cleanCity;
// })



let city_input = document.getElementById('city_input');
let btnCheck = document.getElementById('btnCheck');
let result = document.getElementById('result');

let checkCity = (city) => {
    if (city == '') {
        result.innerText = '';
    } else {
        let isClean = false;

        cleanCities.forEach((cleanCity) => {
            if (cleanCity.toLocaleLowerCase() == city.toLocaleLowerCase()) {
                isClean = true;
            }
        });

        if (isClean == true) {
            result.innerText = city + ' is a clean city';
        }else{
            result.innerText = city + ' is not a clean city';
        }
    }
}

// EventListener Method Example: element.addEventListener('event', callback);
// Using the click event on the button
btnCheck.addEventListener('click', () => {
    let city = city_input.value;
    checkCity(city);
});

city_input.addEventListener('keyup', (event_info) => {
    if(event_info.keyCode == 13){
        let city = event_info.target.value;
        checkCity(city)
    }
});


// LIST PROGRAM
let textbox = document.getElementById('item_input');
let saveBtn = document.getElementById('btnSave');
let itemList = document.getElementById('item_list');

saveBtn.addEventListener('click', function(){
    itemList.innerText += textbox.value + '\n';

    // Reset the value ot the textbox
    textbox.value = '';
})

// Reset Button and its event
document.getElementById('btnReset').addEventListener('click', function(){
    textbox.value = '';
    itemList.innerText = '';
})


