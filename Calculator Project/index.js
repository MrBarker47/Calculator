const btn = document.querySelectorAll('button');
const reset = document.getElementById('clear');
const number = '';
const newOperator = '';
const number2 = '';
const newEqual = document.getElementById('equal');

newEqual.addEventListener('click',(e) => {
  console.log('button works');
})



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
function operator() {
  if(a + b) {
    console.log(add())
  } else if(a - b){
    console.log(subtract())
  } else if (a * b) {
    console.log(multiply())
  } else if (a / b) {
    console.log(divide())
  } else {
    console.log('theres no input yet!')
  }
}


function display() {
  btn.forEach(button => {
    button.addEventListener('click', () =>{
        let numbers = document.getElementById('text')
        numbers.value += button.innerText;
    })
  })
  
}

function clear() {
  reset.addEventListener('click', (e) =>{
   let message = document.getElementById('text').value=""
})

}



display();
clear();
operator();
