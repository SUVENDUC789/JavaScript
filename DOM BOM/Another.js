let vol = 0;
let increment = document.getElementById("incre-btn");
let decrement = document.getElementById("decre-btn");
let heading = document.getElementById("heading");

increment.addEventListener('click', function () {
    vol++;
    heading.innerHTML = 'Volume up ' + vol + ' '
});

decrement.addEventListener('click', () => {
    vol--;
    heading.innerHTML = 'Volume down ' + vol + ' '
});


document.getElementById('alert').addEventListener('click', function () {
    alert('I am Suvendu Chowdhury');
});