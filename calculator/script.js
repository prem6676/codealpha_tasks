let currentInput = '';
let operator = '';
let previousInput = '';
let expression = ''; // Variable to hold the full expression

function appendNumber(number) {
    // Add the number to the current input and update the expression
    currentInput += number;
    expression += number; 
    updateDisplay();
}

function setOperation(op) {
    // If current input is not empty, store the current number and add the operator
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculateResult();  // Calculate previous result if exists
        }
        operator = op;
        previousInput = currentInput;
        currentInput = ''; // Clear current input for the next number
        expression += ` ${op} `;
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return; // Ensure we have a complete expression
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    // Show the result
    currentInput = result.toString();
    expression = currentInput; // After calculation, the expression is just the result
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = expression; // Show the full expression
}
