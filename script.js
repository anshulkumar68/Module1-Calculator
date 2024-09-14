'use strict';

// // using eval() function
// //   function calculate(){
// //     try{
// //       let result = eval(display.value);
// //       if(result%1 !==0)
// //         display.value = result.toFixed(3);
// //       else
// //         display.value = result;
// //     }
// //     catch(error){
// //       console.log(error);
// //       display.value = "error";
// //     }
// //   }

// Select the display input field
const display = document.querySelector('.input-field');

// Function to append input to the display
function appendtoDisplay(input) {
  display.value += input;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to handle backspace/delete
function handleDelete() {
  display.value = display.value.toString().slice(0, -1);
}

// Function to calculate the result
function calculate() {
  try {
    const tokens = tokenize(display.value);
    const result = evaluateExpression(tokens);
    display.value = result % 1 !== 0 ? result.toFixed(3) : result;
  } catch (error) {
    display.value = 'error';
  }
}

// Tokenize the input string into numbers and operators
function tokenize(expression) {
  const regex = /\d+|\S/g;
  return expression.match(regex);
}

// Evaluate the expression using stacks
function evaluateExpression(tokens) {
  const operandStack = []; // Stack for numbers
  const operatorStack = []; // Stack for operators

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  // Process each token
  tokens.forEach(token => {
    if (!isNaN(token)) {
      operandStack.push(parseFloat(token));
    } else if (['+', '-', '*', '/'].includes(token)) {
      while (operatorStack.length &&
             precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {
        processOperator();
      }
      operatorStack.push(token);
    }
  });

  // Process remaining operators
  while (operatorStack.length) {
    processOperator();
  }

  // Function to apply an operator to operands
  function processOperator() {
    const operator = operatorStack.pop();
    const rightOperand = operandStack.pop();
    const leftOperand = operandStack.pop();

    let result;
    switch (operator) {
      case '+':
        result = leftOperand + rightOperand;
        break;
      case '-':
        result = leftOperand - rightOperand;
        break;
      case '*':
        result = leftOperand * rightOperand;
        break;
      case '/':
        if (rightOperand === 0) {
          throw new Error("Division by zero");
        }
        result = leftOperand / rightOperand;
        break;
    }
    operandStack.push((result % 1 !== 0) ? parseFloat(result.toFixed(3)) : result);
  }

  // The result should be the only item on the operand stack
  return operandStack.pop();
}
