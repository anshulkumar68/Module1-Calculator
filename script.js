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
const del = document.querySelector('.delete');
const add = document.querySelector('.add');
const sub = document.querySelector('.subtract');
const mul = document.querySelector('.multiply');
const divide = document.querySelector('.division');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equals');
const dot = document.querySelector('.dot');
const input = document.querySelector('.input-field');


// on click updating values to input field
zero.addEventListener("click", () => {
  input.value += zero.textContent;
});
one.addEventListener("click", () => {
  input.value += one.textContent;
});
two.addEventListener('click', ()=>{
    input.value  += two.textContent;
})
three.addEventListener("click", () => {
  input.value += three.textContent;
});
four.addEventListener("click", () => {
  input.value += four.textContent;
});
five.addEventListener("click", () => {
  input.value += five.textContent;
});
six.addEventListener("click", () => {
  input.value += six.textContent;
});
seven.addEventListener("click", () => {
    input.value += seven.textContent;
});
eight.addEventListener('click', ()=>{
    input.value  += eight.textContent;
})
nine.addEventListener('click', ()=>{
    input.value  += nine.textContent;
})
add.addEventListener('click', ()=>{
    input.value += add.textContent;
})
sub.addEventListener('click', ()=>{
    input.value += sub.textContent;
})
mul.addEventListener('click', ()=>{
    input.value += mul.textContent;
})
divide.addEventListener('click', ()=>{
    input.value += divide.textContent;
})
dot.addEventListener("click", () => {
  input.value += dot.textContent;
});









