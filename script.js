'use strict';

// Selecting elements

const displayEle = document.querySelector('.display');
const inputEle = document.querySelector('.input');

const numberEles = Array.from(document.querySelectorAll("[class^='number']"));
const operatorEles = Array.from(
  document.querySelectorAll("[class^='operator'")
);

console.log(numberEles);

numberEles.forEach(button => {
  button.addEventListener('click', function () {
    calculation = Number((inputEle.textContent += button.textContent));
    console.log(calculation);
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
  let sum;
  if (operator === '+') {
    sum = add(num1, num2);
  } else if (operator === '-') {
    sum = subtract(num1, num2);
  } else if (operator === '*') {
    sum = multiply(num1, num2);
  } else if (operator === '/') {
    sum = divide(num1, num2);
  }
  return sum;
}

// Variables

let array = [];
let calculation = 0;

// Calculate the result

operatorEles.forEach(button => {
  button.addEventListener('click', function () {
    if (button === document.querySelector('.operator-add')) {
      array.push(calculation);
      calculation = 0;
      inputEle.textContent = '';
      console.log(array);
      console.log(calculation);
    }
    if (button === document.querySelector('.operator-equals')) {
      array.push(calculation);
      displayEle.textContent = operate('+', array[0], array[1]);
    }
  });
});
