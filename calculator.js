function addNums(num1, num2) {
  return num1 + num2;
}

function subtractNums(num1, num2) {
  return num1 - num2
}

function multiplyNums(num1, num2) {
  return num1 * num2
}

function divideNums(num1, num2) {
  return num1 / num2
}

function powerNums(num1, num2) {
  return num1 ^ num2
}

function remainderNums(num1, num2) {
  return num1 % num2
}

function sqrt (num) {
  return num ** 0.5
}

function calculate(expression) {
  const tokens = expression.split(' ');

  let num1;
  let operator; 
  let num2;
  
if (tokens.length === 3) {
  num1 = Number(tokens[0]);
  operator = tokens[1];
  num2 = Number(tokens[2]);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('Not a number! Try again.')
    return;
  }
}
else if (tokens.length === 2) {
  operator = tokens[0];
  num1 = Number(tokens[1]);
  if (Number.isNan(num1)) {
    alert('Not a number! Try again.')
    return;
  }
} else {
  alert('Invalid expression! Try again.')
  return;
}
  operator = tokens[1]
  num1 = Number(tokens[0])
  num2 = Number(tokens[2])

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('Not a number! Try again.')
    return; 
  }
  if (operator === '+') {
    return addNums(num1, num2);
  }
  if (operator === '-') {
    return subtractNums(num1, num2)
  }
  if (operator === '*') {
    return multiplyNums(num1, num2)
  }
  if (operator === '/') {
    return divideNums(num1, num2)
  }
  if (operator === '^') {
    return powerNums(num1, num2)
  }
  if (operator === '%') {
    return remainderNums(num1, num2)
  }
  if (operator === 'sqrt') {
    return sqrt(num1)
  }
  alert('Unrecognized operator')
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
