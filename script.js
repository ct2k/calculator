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

let container = 0;

numberEles.forEach(button => {
  button.addEventListener('click', function () {
    container = Number((inputEle.textContent += button.textContent));
    console.log(container);
  });
});

let calculation = 0;

// Basic math functions

function add(num1, num2) {
  for (let i = 0; i < num1.length; i++) {
    calculation = num1[i] + num2;
  }
  return (array = [calculation]);
}

function subtract(num1, num2) {
  for (let i = 0; i < num1.length; i++) {
    calculation = num1[i] - num2;
  }
  return (array = [calculation]);
}

function multiply(num1, num2) {
  for (let i = 0; i < num1.length; i++) {
    calculation = num1[i] * num2;
  }
  return (array = [calculation]);
}

function divide(num1, num2) {
  for (let i = 0; i < num1.length; i++) {
    calculation = num1[i] / num2;
  }
  return (array = [calculation]);
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
let operator = undefined;

// Calculate the result

operatorEles.forEach(button => {
  button.addEventListener('click', function () {
    if (button === document.querySelector('.operator-add')) {
      inputEle.textContent = '';
      if (calculation === 0) {
        array.push(container);
        operator = button.textContent;
        operate(operator, array, calculation);
        displayEle.textContent = roundDeci(calculation);
      } else if (calculation !== 0 && operator === '+') {
        operator = button.textContent;
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        container = 0; // Prevents user from spamming operator with last value
      } else if (calculation !== 0 && operator !== '+') {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        container = 0;
        operator = button.textContent;
      }
    } else if (button === document.querySelector('.operator-subtract')) {
      inputEle.textContent = '';
      if (calculation === 0) {
        array.push(container);
        operator = button.textContent;
        operate(operator, array, calculation);
        displayEle.textContent = roundDeci(calculation);
      } else if (calculation !== 0 && operator === '-') {
        operator = button.textContent;
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        container = 0;
      } else if (calculation !== 0 && operator !== '-') {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        container = 0;
        operator = button.textContent;
      }
    } else if (button === document.querySelector('.operator-multiply')) {
      inputEle.textContent = '';
      if (calculation === 0) {
        array.push(container);
        operator = button.textContent;
        container = 1; // Prevents the first calculation being multiplied by itself
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
      } else if (calculation !== 0 && operator === '*') {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
      } else if (calculation !== 0 && operate !== '*') {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        operator = button.textContent;
      }
    } else if (button === document.querySelector('.operator-divide')) {
      inputEle.textContent = '';
      if (calculation === 0) {
        array.push(container);
        operator = button.textContent;
        container = 1; // Prevents division by 0
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
      } else if (calculation !== 0 && operator === '/') {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
      } else if (calculation !== 0 && operator !== '/') {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        operator = button.textContent;
      }
    }
    if (button === document.querySelector('.operator-equals')) {
      if (operator !== undefined) {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        operator = undefined;
        container = 0;
        inputEle.textContent = '';
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
  calculation = 0;
  array = [];
}

// Round to 2 decimal places

function roundDeci(num) {
  const toString = num.toString();
  const split = toString.split('');
  if (split.includes('.')) {
    split.splice(split.indexOf('.') + 3);
  }
  return Number(split.join(''));
}
