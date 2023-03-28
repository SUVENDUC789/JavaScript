let MyName = "Suvendu Chowdhury";

console.log(MyName.toUpperCase());//Convert upper case
console.log(MyName.toLowerCase());//Convert lower case

// String slicing 
console.log(MyName.slice(2, 10));
console.log(MyName.slice(2));

// String replace 
let guru = "Harry";
let sentence = `${guru} was all time ${guru.replace('rr', 'pp')}`;
console.log(sentence);

//Concat string
/*-----------Method 1: using + Operator------------------*/
let firstname="Suvendu";
let lastname="Chowdhury";
let fullname=firstname+' '+lastname;
console.log(fullname)
/*-----------Method 2: using concat() method --------------*/
let fullsentence='';
console.log(fullsentence.concat("Full name is : ",firstname," ",lastname))

// trim 
let last='      I am a Boy      ';
console.log(last);
console.log(last.trim());

// Quick Quiz :
let qq ='Rahul'.toUpperCase();

console.log('Using for of loop...');
for (const item of qq) {
    console.log(item);
}
console.log('Using tradional for loop ...');
for(let i=0;i<qq.length;i++)
{
    console.log(qq[i]);
}
