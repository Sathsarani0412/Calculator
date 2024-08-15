let currentInput = '';
let operation = null;
let firstNumber = null;

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return; // Prevent setting operation without a number
    if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
    } else {
        calculateResult();
    }
    operation = op;
    currentInput = '';
}

function calculateResult() {
    if (firstNumber === null || currentInput === '') return; 
    const secondNumber = parseFloat(currentInput);
    let result;

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    document.getElementById('result').value = result;
    currentInput = '';
    operation = null;
    firstNumber = result; }

function clearResult() {
    currentInput = '';
    operation = null;
    firstNumber = null;
    document.getElementById('result').value = '';
}

function cancelLastEntry() {
    currentInput = currentInput.slice(0, -1); 
    document.getElementById('result').value = currentInput;
}
