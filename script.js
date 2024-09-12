'use strict';


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

function calculate(){
    try{
        let tokens = tokenize(display.value);
        let result = evaluateExpression(tokens);
        display.value = result;
    }
    catch(error){
        display.value = 'error';
    }
}  

function tokenize(expression){
    const regex = /\d+|\S/g;
    return expression.match(regex);
}

function evaluateExpression(tokens){
    const operandStack = [];
    const operatorStack = [];
    const precedence = {
        '+' : 1,
        '-' : 1,
        '*' : 2,
        '/' : 2,
    }

    // process each token
    tokens.forEach(token => {
        if(!isNaN(token)){
            operandStack.push(parseFloat(token));
        } else if(['+', '-', '*', '/'].includes(token)){
            while(operatorStack.length && precedence[operatorStack[operatorStack.length - 1]] >= precedene[token]){
                processOperator();
            }
            operatorStack.push(token);
        }
    });

    // Process remaining operators
    while(operatorStack.length){
        processOperator();
    }

    //Function to apply an operator to operands
    function processOperator(){
        const operator = operatorStack.pop();
        const rightOperand = operandStack.pop();
        const leftOperand = operandStack.pop();

        let result;
        switch(operator){
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
                if(rightOperand === 0){
                    throw new Error("Division by zero");
                }
                result = leftOperand / rightOperand;
                break;
        }
        operandStack.push(result);
    }
    // the result should be the only item on the operand stack
    return operandStack.pop();
}


// using eval() function
//   function calculate(){
//     try{
//       let result = eval(display.value);
//       if(result%1 !==0)
//         display.value = result.toFixed(3);
//       else
//         display.value = result;
//     }
//     catch(error){
//       console.log(error);
//       display.value = "error";
//     }
//   }

