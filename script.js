'use strict';

// Selecting elements

const displayEle = document.querySelector('.display');
const inputEle = document.querySelector('.input');

const numberEles = Array.from(
  document.querySelectorAll("[class^='number'], [class^='operator'")
);

console.log(numberEles);

numberEles.forEach(button => {
  button.addEventListener('click', function () {
    calculation = inputEle.textContent += button.textContent;
  });
});

// Basic math functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

// Variables

let calculation = 0;
