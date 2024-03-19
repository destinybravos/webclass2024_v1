// Declaring Methods (Function)
// ES5 and below Syntax;
// function methodName([parameters]){
//     Statements
//     [return value]
// }

// function greet(){
//     console.log("Hello everyone");
// }
// greet();

// function greetSomeone(name){
//     console.log("Hello " + name);
// }
// greetSomeone("Udeme");

// function sum2num(num1, num2){
//     let sum = num1 + num2;
//     console.log("The sum of the two number is " + sum);
// }
// sum2num(3, 8);

// function findInterest(principalAmt, time = 12){
//     const rate = 3/100;
//     let interest = principalAmt * rate * time;
//     return interest;
// }



// ES6 and above
// let methodName = ([parameters]) => {
//     Statements
//     [return value]
// }

// let greet = () =>{
//     console.log("Hello Everyone");
// }
// greet()

// let greetSomeone = (name) =>{
//     console.log("Hello " + name);
// }
// greetSomeone("Udeme");

// let sum2num = (num1, num2) => {
//     let sum = num1 + num2;
//     console.log("The sum of the two number is " + sum);
// }
// sum2num(3, 8);

let findInterest = (principalAmt, time = 12) => {
    const rate = 3/100;
    let interest = principalAmt * rate * time;
    return interest;
}

// Example Program using simple interest
// An Interest program
let p, t, totalAmt;
p = parseFloat(prompt("Enter the princpal amount"));
t = parseInt(prompt("Enter the time duration in months"));

totalAmt = findInterest(p, t) + p;

console.log(totalAmt);