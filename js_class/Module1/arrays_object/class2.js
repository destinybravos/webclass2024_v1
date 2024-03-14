// let numbers = [2,4,6,7,8,4,2,56,23,23];
// let i = 0;
// while(i < numbers.length){
//     i++;
// }

// let i = 0;
// do{
//     i++;
// }while(i < numbers.length);
// for(let i = 0; i < numbers.length; i++){
// }

let numbers = [2,4,6,7,8,4,2,56,23,23];

let i = 0;
let largest;

while(i < numbers.length){
    if (i == 0) {
        largest = numbers[i];
    }else{
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    i++;
}
console.log(largest);

