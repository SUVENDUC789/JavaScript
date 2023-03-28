//Arrow function
const len = (sen) => {
    return sen.length;
}
//Arrow function
const type = (parameter) => {
    return typeof parameter;
}

console.log(len('Supratim Majumder'));
console.log(len('Suvendu Chowdhury'));

console.log(type('Supratim Majumder'));
console.log(type('Suvendu Chowdhury'));


let myname = "Rahul";
console.log(myname);
console.log(myname.length)

// let inputname = prompt("Ener your name : ");

let inputname = "rahul";
for (let i = 0; i < inputname.length; i++) {
    // console.log(inputname[i]);
}

// Template literal 
let boy1 = "Suvendu";
let boy2 = "Supratim";

let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);

let frute = 'Wife\'s'
console.log(frute)
console.log(len(frute))


