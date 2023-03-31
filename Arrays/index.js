const len = (arr) => {
    return arr.length;
}

const type=(arr)=>{
    return typeof arr;
}

let arr = []
let i = 0;

arr[i] = 10;
console.log(arr[i++]);
arr[i] = 10 + 10;
console.log(arr[i++]);
arr[i] = 10 + 10 + 10;
console.log(arr[i++]);

console.log(arr);
console.log(typeof arr);
console.log(type(arr));
console.log("Length of this array : ", arr.length);
console.log("Length of this array : ", len(arr));

// using for of loop 
for (const item of arr) {
    console.log(item);
}
