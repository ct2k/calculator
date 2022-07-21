'use strict';

// Selecting elements

const displayEle = document.querySelector('.display');
const inputEle = document.querySelector('.input');

const numberEles = Array.from(document.querySelectorAll("[class^='number']"));
const operatorEles = Array.from(
  document.querySelectorAll("[class^='operator'")
);
const operatorClrEle = document.querySelector('.operator-clear');

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
let operator;
let isActive = true;

// Calculate the result

operatorEles.forEach(button => {
  button.addEventListener('click', function () {
    if (button === document.querySelector('.operator-add')) {
      array.push(calculation);
      calculation = 0;
      inputEle.textContent = '';
      operator = '+';
      console.log(array);
      console.log(calculation);
    } else if (button === document.querySelector('.operator-subtract')) {
      array.push(calculation);
      inputEle.textContent = '';
      operator = '-';
    } else if (button === document.querySelector('.operator-multiply')) {
      array.push(calculation);
      inputEle.textContent = '';
      operator = '*';
    } else if (button === document.querySelector('.operator-divide')) {
      array.push(calculation);
      inputEle.textContent = '';
      operator = '/';
    }
    if (button === document.querySelector('.operator-equals')) {
      if (isActive && operator !== undefined) {
        array.push(calculation);
        displayEle.textContent = operate(operator, array[0], array[1]);
        array = [];
        calculation = 0;
        isActive = false;
      }
    }
  });
});

// Clear calculator display

operatorClrEle.addEventListener('click', clearDisplay);

function clearDisplay() {
  displayEle.textContent = '';
  inputEle.textContent = '';
  operator = undefined;
  isActive = true;
}
