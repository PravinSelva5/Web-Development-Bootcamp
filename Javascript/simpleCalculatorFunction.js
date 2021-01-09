/* Just a simple fuction to showcase higher order functions in javascript */


function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function mulitply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function power(base, powerValue){
  return base ** powerValue;
}

function calculator (num1, num2, operator){
  return operator(num1, num2);
}
