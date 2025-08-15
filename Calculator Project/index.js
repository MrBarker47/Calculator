const btn = document.querySelectorAll('button');
const reset = document.getElementById('clear');
const newEqual = document.getElementById('equal');




// The functions for the different operations. 
function add(a,b) {
  return a + b;
}

//Subtract function
function subtract(a,b) {
  return a - b;
}

//Multiply function
function multiply(a,b) {
 return a * b;
}

//Divide function
function divide(a,b) {
  return a / b;
}

//Operator
function operate(a,b,operator) {
  if(operator === '+') {
    return add(a,b);
  } else if (operator === "-") {
    return subtract(a,b);
  } else if (operator === "*") {
    return multiply(a,b) 
  } else if (operator === "/") {
    return divide(a,b) 
  } else {
    return "Not connected";
  }
}

 
//  Display
function display() {
  btn.forEach(button => {
    button.addEventListener('click', () =>{
        let numbers = document.getElementById('text')
        numbers.value += button.innerText;
    })
  })
}

//Clear
function clear() {
  reset.addEventListener('click', (e) =>{
   let message = document.getElementById('text').value=""
 })
}

function divide(a,b) {
    if(b === 0) {
      return "Error: Division by zero"
    } else {
      return a / b
    }
}

//Equals
function solve() {
  newEqual.addEventListener("click", (e) => {
    let numbers = document.getElementById('text');
    // let newEqual = document.getElementById('equal').value = "";
    const match = numbers.value.match(/^(\d+)([+\-*/])(\d+)$/);
    if (match) {
      let a =  Number(match[1]);
      let operator = match[2];
      let b = Number (match[3]);
      let result = operate(a, b, operator);
      numbers.value = result;
    } else {
      numbers.value = "Error";
    }
  });
}


operate();
solve();
display();
clear()





