'use strict';

// Initialization
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const dot = document.querySelector('.dot');
const display = document.querySelector('.input-field');
const addButton = document.querySelector('.add');
const subButton = document.querySelector('.subtract');
const mulButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.division');
const resetButton = document.querySelector('.reset');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

// on click updating values to display field
zero.addEventListener("click", () => {
  display.value += zero.textContent;
});
one.addEventListener("click", () => {
  display.value += one.textContent;
});
two.addEventListener('click', ()=>{
    display.value  += two.textContent;
})
three.addEventListener("click", () => {
  display.value += three.textContent;
});
four.addEventListener("click", () => {
  display.value += four.textContent;
});
five.addEventListener("click", () => {
  display.value += five.textContent;
});
six.addEventListener("click", () => {
  display.value += six.textContent;
});
seven.addEventListener("click", () => {
    display.value += seven.textContent;
});
eight.addEventListener('click', ()=>{
    display.value  += eight.textContent;
})
nine.addEventListener('click', ()=>{
    display.value  += nine.textContent;
})
addButton.addEventListener('click', ()=>{
    display.value += addButton.textContent;
})
subButton.addEventListener('click', ()=>{
    display.value += subButton.textContent;
})
mulButton.addEventListener('click', ()=>{
    display.value += mulButton.textContent;
})
divideButton.addEventListener('click', ()=>{
    display.value += divideButton.textContent;
})
dot.addEventListener("click", () => {
  display.value += dot.textContent;
});

// delete button functionality
deleteButton.addEventListener('click', ()=>{
    currentInput = display.value.slice(0,-1);
    display.value = currentInput;
})

console.log(display.value);
// if(display.)