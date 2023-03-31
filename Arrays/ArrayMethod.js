// Method 1 : toString()
let arr = [9, 6, 7, 4, 2, 8, 9, 2, 2, 0]
let ph = arr.toString();
console.log(ph);
console.log(typeof ph);

// Method 2 : join()
let dob = [19, 10, 2002];
let datemy = dob.join('/');
console.log(datemy)
let anodatemy = dob.join('-');
console.log(anodatemy);

// Method 3 : pop()
let res = [10, 20, 30];
let n = res.pop()
console.log(res, n)


//Delete Operator :
let num = [0, 1, 2, 3, 4, 5, 7, 9];
console.log(num, num.length);
delete num[0];
console.log(num, num.length);
delete num;
console.log(num, num.length);


//Sort Method:
const compare = (a, b) => {
    return a - b;
}
let myarr = [9, 6, 7, 4, 2, 8, 9, 200, 2, 0];
myarr.sort(compare);
console.log(myarr);