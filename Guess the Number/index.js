function input(i) {
    let n = prompt("Enter number [" + i + "] : ");
    return Number.parseInt(n);
}

let n = Math.floor(Math.random() * 100) + 1;

let i = 0;
while (true) {
    i++;
    let mychoice = input(i);
    if (mychoice == n) {
        let sen = `Correct choice !😁\nYour Total choice = ${i}`;
        alert("" + sen);
        break;
    } else if (mychoice > n) {
        let sen = `Incorrect choice !🤣\nPlease ! choice the small number`;
        alert("" + sen);
    }
    else {
        let sen = `Incorrect choice !😪\nPlease ! choice the big  number`;
        alert("" + sen);
    }
}

alert("Creater 😎 : Suvendu Chowdhury.");

