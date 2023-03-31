console.log("Map, Filter & Reduce");

let a = [9, 6, 7, 4, 2, 8];

// Map Method 

let b = a.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
});

console.log("b array : ", b);

let b1 = a.map(function (v, i, a) {
    console.log(v, i, a);
    return i;
});

console.log("b1 array : ", b1);