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
      operatorConditionalCheck(button);
    } else if (button === document.querySelector('.operator-subtract')) {
      operatorConditionalCheck(button);
    } else if (button === document.querySelector('.operator-multiply')) {
      operatorConditionalCheck(button);
    } else if (button === document.querySelector('.operator-divide')) {
      operatorConditionalCheck(button);
    } else if (button === document.querySelector('.operator-equals')) {
      if (operator !== undefined) {
        operate(operator, array, container);
        displayEle.textContent = roundDeci(calculation);
        operator = undefined;
        container = 0;
      }
    }
  });
});

function operatorConditionalCheck(button) {
  inputEle.textContent = '';
  if (calculation === 0 && container !== 0) {
    array.push(container);
    operator = button.textContent;
    if (operator === '*' || operator === '/') {
      container = 1; // Prevents the first calculation being multiplied by itself or division by 0
      operate(operator, array, container);
    } else {
      operate(operator, array, calculation);
    }
    displayEle.textContent = roundDeci(calculation);
  } else if (calculation !== 0 && operator === button.textContent) {
    operator = button.textContent;
    operate(operator, array, container);
    displayEle.textContent = roundDeci(calculation);
    container = 0; // Prevents user from spamming operator with last value
  } else if (calculation !== 0 && operator !== button.textContent) {
    operate(operator, array, container);
    displayEle.textContent = roundDeci(calculation);
    container = 0;
    operator = button.textContent;
  }
  checkForZero(calculation);
  console.log(calculation);
}

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

// Prevent division by zero

function checkForZero(num) {
  if (num === Infinity) {
    displayEle.textContent = "Can't divide by zero!";
    operator = undefined;
    array = [];
    calculation = NaN;
  } else {
    displayEle.textContent = roundDeci(num);
    inputEle.textContent = '';
  }
}

// Disable decimal button if there's already one in the display

const deciBtn = document.querySelector('.separator-decimal');

deciBtn.addEventListener('click', function () {
  if (inputEle.textContent.includes('.')) return;
  Number((inputEle.textContent += deciBtn.textContent));
});

// Delete button

const delBtn = document.querySelector('.del');

delBtn.addEventListener('click', deleteKey);

function deleteKey() {
  let slice = inputEle.textContent.slice(0, -1);
  container = Number((inputEle.textContent = slice));
  console.log(container);
}

// Keyboard support

window.addEventListener('keydown', function (event) {
  const key = event.key;
  numberEles.forEach(button => {
    if (key === button.textContent) {
      container = Number((inputEle.textContent += button.textContent));
      startAnimation(button);
    }
  });
  operatorEles.forEach(button => {
    if (key === button.textContent) operatorConditionalCheck(button);
    if (key === 'Delete') clearDisplay();
    if (key === 'Delete') startAnimation(operatorClrEle);
    if (key === button.textContent) startAnimation(button);
  });
  if (key === deciBtn.textContent) {
    if (inputEle.textContent.includes('.')) return;
    container = Number((inputEle.textContent += deciBtn.textContent));
    startAnimation(deciBtn);
  }
  if (key === 'Backspace') deleteKey();
  if (key === 'Backspace') startAnimation(delBtn);
  console.log(key);
});

function startAnimation(button) {
  button.classList.remove('feedback');
  setTimeout(function () {
    button.classList.add('feedback');
  }, 1);
}
