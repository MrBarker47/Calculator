const btn = document.querySelectorAll('button');
const reset = document.getElementById('clear');
const newEqual = document.getElementById('equal');

let number = '';
let newOperator = '';
let number2 = '';
let isSecondNumber = false;



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

  // console.log(operate(2, 5, "+"));

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
    numbers.value += newEqual.innerText;
    number += "";
    newOperator += "";
    number2 += "";
  })
}





// function solve(number, newOperator, number2) {
//   btn.forEach(button => {
//     newEqual.addEventListener("click", (e) =>{
//       let numbers = document.getElementById('text');
//       numbers.value += btn.innerText;
//       number += "";
//       newOperator += "";
//       number2 += "";
//     })
//   })
// }



// function getValue() {
//       let numbers = document.getElementById('text').value;
//       let part = numbers.split(/([+\-*/])/);

// }

display();
clear();
operate();
solve();

