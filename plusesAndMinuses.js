// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0;

const addOne = (e) =>  counter++;
const minusOne = (e) => counter--;

const plusEl = document.getElementById("plus");
plusEl.addEventListener('click', addOne);
plusEl.addEventListener('click', (e) => document.getElementById('count').innerText = counter);

// When a user clicks the – element, the count should decrease by 1 on screen.
const minusEl = document.getElementById("minus");
minusEl.addEventListener('click', minusOne);
minusEl.addEventListener('click', (e) => document.getElementById('count').innerText = counter);

