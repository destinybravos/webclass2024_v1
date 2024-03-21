let customAlert = (message) => {
    let modal = document.querySelector(".modal")
    let modalBody = document.querySelector("#modal-body")
    modalBody.innerText = message;
    modal.classList.remove('hidden');
}

let closeCustomAlert = () => {
    let modal = document.querySelector(".modal")
    let modalBody = document.querySelector("#modal-body")
    modalBody.innerText = "";
    modal.classList.add('hidden');
}


let factorialOf = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        // factorial = factorial * i;     
        factorial *= i;     
    }
    return factorial;
}

let n,r, userOption;

n = parseInt(prompt("Enter a value for N"));
r = parseInt(prompt("Enter a value for R"));
userOption = parseInt(prompt("CHOOSE FROM THE OPTION BELOW; " + 
                            "\n1.\tCalculate Permutation" +
                            "\n2.\tCalculate Combination" +
                            "\n3.\tFind their factorial"))

switch (userOption) {
    case 1:
        // Calculate Permutation
        let perm = factorialOf(n) / factorialOf(n - r);
        customAlert("The permutation is " + perm);
        break;

    case 2:
        // Calculate combinaton
        let comb = factorialOf(n) / (factorialOf(r) * factorialOf(n - r));
        customAlert("The combination is " + comb);
        break;
    
    case 3:
        // Find the factorial of N and R
        customAlert("Factorials; \nN= " + factorialOf(n) + "\nR=" + factorialOf(r));
        break;

    default:
        customAlert("Invalid Option Selected")
        break;
}