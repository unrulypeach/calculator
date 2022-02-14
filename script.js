let displayValue = 0;

const operate = function(x, y, z) {
  switch (z) {
    case "divide":
      displayValue = divide(x, y);
      // screen.innerHTML = displayValue;
      updateScreen();
      break;
    case "multiply":
      displayValue = multiply(x, y);
      // screen.innerHTML = displayValue;
      updateScreen();
      break;
    case "add":
      displayValue = add(x, y);
      // screen.innerHTML = displayValue;
      updateScreen();
      break;
    case "subtract":
      displayValue = subtract(x, y);
      // screen.innerHTML = displayValue;
      updateScreen();
      break;
  }
};

// const operate = function(x, y, z) {
//   if (z == "divide") {
//     return divide(x,y);
//   } else if (z == "multiply") {
//     return  multiply(x, y);
//   } else if (z == "add") {
//     return add(x,y);
//   } else if (z == "subtract") {
//     return  subtract(x, y);
//   }
// };

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

//buttons
const numButton = document.getAttributeNames('num');

// numButton.forEach(element => element.addEventListener("keypress", function (event) {
//   displayValue = this.value;
//   screen.innerHTML = displayValue;
// }));

for (const element in numButton) {
  element.addEventListener("click", function (event) {
    displayValue = event.target.innerHTML;
    updateScreen();
  })
}
