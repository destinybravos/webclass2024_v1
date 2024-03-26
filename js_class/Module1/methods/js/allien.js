let string = '________\n|';
let loopCounter = 0;
for (let i = 0; i < 50; i++) {
    if(i > 1 && i % 2 == 0){
        string += "#";
    }else{
        string += " ";
    }
    
    if(loopCounter == 7){
        string += '|\n|';
        loopCounter = 0;
    }
    loopCounter++;
}

console.log(string);