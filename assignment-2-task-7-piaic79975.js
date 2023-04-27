// Function to perform the calculator operation
function calculateResult(a, b, operation) {
  if (operation === '+') {
    return a + b;
  } else if (operation === '-') {
    return a - b;
  } else if (operation === '*') {
    return a * b;
  } else if (operation === '/') {
    return a / b;
  } else if (operation === '%') {
    return a % b;
  } else {
    return 'Invalid operation!';
  }
}

// Taking user input
const firstNumber = parseFloat(prompt('Enter the first number:'));
const secondNumber = parseFloat(prompt('Enter the second number:'));
const operation = prompt('Enter the operation (+, -, *, /, %):');

// Calling the calculateResult function
const result = calculateResult(firstNumber, secondNumber, operation);

// Displaying the result to the user
console.log(`Result: ${result}`);
