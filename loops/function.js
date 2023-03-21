function factorial(n = 5) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

function fibbonacci(n) {
    if (n == 1)
        return 0;
    else if (n == 2)
        return 1;
    return fibbonacci(n - 1) + fibbonacci(n - 2);
}

// Arrow function syntax 
// type functionname = (Parameter) =>{}


const input = (sentence) => {
    return prompt(sentence);
}

let printSuv = (sentence) => {
    console.log(sentence)
}

// let n = Number.parseInt(prompt("Enter number : "));

let n = Number.parseInt(input("Enter number used input fun : "))
printSuv(n + " ! = " + factorial(n));
printSuv(n + " th term " + fibbonacci(n));