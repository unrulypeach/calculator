let displayValue = "";
let operator = "";
let components = [];
let history = "";

function add(x, y) {
  return parseInt(x) + parseInt(y);
};
function subtract(x, y) {
  return parseInt(x) - parseInt(y);
};
function multiply(x, y) {
  return parseInt(x) * parseInt(y);
};
function divide(x, y) {
  return parseInt(x) / parseInt(y);
};

const operate = function(x, z) {
  const q = x.at(-2);
  const r = x.at(-1);

  switch (z) {
    case "divide":
      displayValue = divide(q, r);
      components.push(displayValue);
      break;
    case "multiply":
      displayValue = multiply(q, r);
      components.push(displayValue);
      break;
    case "add":
      displayValue = add(q, r);
      components.push(displayValue);
      break;
    case "subtract":
      displayValue = subtract(q, r);
      components.push(displayValue);
      break;
  }
};

//screen
const screen = document.getElementById('screen');
function updateScreen(){
  screen.innerHTML = displayValue;
};
//number Buttons
const numButton = document.querySelectorAll('.num');
numButton.forEach(function(element) {
  element.addEventListener('click', numbR());
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

  if (keyName == 'Enter') {
    equalOp();
  } else if (!isNaN(keyName)) {
    displayValue += event.key;
    updateScreen();
  };
});

//operator Buttons
const operators = document.querySelectorAll('.operator');
operators.forEach(function(element) {
  element.addEventListener("click", oper8r())
});

function oper8r() {
  return function (event) {
    let opType = event.target.id;
    components.push(displayValue); // add number to 'memory'
      if (components.length == 2) {
        equalsOp();
        return;
      };
      if (components.length > 2) {
        equalsOp();
      }; 
      operator = opType; // operator = 'add'
      // else if (components.length == 1) {
      console.log(components);
      displayValue = ""; //refresh inner screen for next input
    
  };
};

//AllClear
const ac = document.getElementById('allClr');
ac.addEventListener('click', allClear());
function allClear() {
  return function () {
    displayValue = "";
    screen.innerHTML = 0;
    operator = "";
    components = [];
    history = "";
  };
};

//equal
const equal = document.getElementById('equals');
equal.addEventListener("click", equalOp());

function equalOp() {
  return function (event) {
  components.push(displayValue); //add n2 to arr
  console.log(components);
  operate(components, operator);
  updateScreen();
  operator = '';
  };
};

function equalsOp(){
  //components.push(displayValue); //add n2 to arr
  operate(components, operator);
  console.log(components);
  updateScreen();
  operator = '';
};

export { add };
