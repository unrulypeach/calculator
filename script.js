let displayValue = "";

const operate = function(x, y, z) {
  switch (z) {
    case "divide":
      displayValue = divide(x, y);
      updateScreen();
      break;
    case "multiply":
      displayValue = multiply(x, y);
      updateScreen();
      break;
    case "add":
      displayValue = add(x, y);
      updateScreen();
      break;
    case "subtract":
      displayValue = subtract(x, y);
      updateScreen();
      break;
  }
};
function add(x, y) {
  return x + y;
};
function subtract(x, y) {
  return x - y;
};
function multiply(x, y) {
  return x * y;
};
function divide(x, y) {
  return x / y;
};

//screen
const screen = document.getElementById('screen');
function updateScreen(){
  screen.innerHTML = displayValue;
};

//number Buttons
const numButton = document.querySelectorAll('.num');
numButton.forEach(function(element) {
  element.addEventListener('click', numbR())
});
function numbR() {
  return function (event) {
    displayValue += event.target.id[1];
    updateScreen();
  };
};

//keyboard number input
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  
  if (!isNaN(keyName)) {
    displayValue += event.key;
    updateScreen();
  }
});

//operator Buttons
const operators = document.querySelectorAll('.operator');
operators.forEach(function(element) {
  element.addEventListener("click", oper8r())
});

function oper8r() {
  return function (event) {
    console.log(event.target.id);
  }
};

//AllClear
const ac = document.getElementById('allClr');
ac.addEventListener('click', allClear());
function allClear() {
  return function () {
    displayValue = "";
    screen.innerHTML = 0;
  };
};