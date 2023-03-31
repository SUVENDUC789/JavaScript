let a = [9,6,7,4,2,8];

// classical for loop 
for (let i = 0; i < a.length; i++) {
    console.log(i);
}

// foreach loop 
a.forEach(e => {
    console.log(e * e);
});

// Array from : (any)object to Array conversion 
let myname = Array.from("Suvendu");
console.log(myname);


// for of loop
for (const item of a) {
    console.log(item);
}

// for in loop 
for (let i in a) {
    console.log("Index : ",i," value : ",a[i]);
}