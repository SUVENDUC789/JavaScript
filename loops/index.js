// Tradional for loop 
let n = Number.parseInt(prompt("Enter number : "));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Result is : ", sum);


let obj = {
    suvendu: 7.1,
    hritik: 6.9,
    debarpan: 7.3,
    bristi: null,
    ayush: null
};


// Example of for in loop 
for (let key in obj) {
    console.log("Name is : ", key, " Cgpa is : ", obj[key]);
}

// Example of for of loop 
let nameStudents = prompt("Enter your name : ");
for (let item of nameStudents) {//for of work only a ittarable
    console.log(item)
}
