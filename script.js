let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
  if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
    currentInput += operator;
    document.getElementById('result').value = currentInput;
  }
}

function clearScreen() {
  currentInput = '';
  document.getElementById('result').value = '';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('result').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('result').value = currentInput;
  } catch (e) {
    document.getElementById('result').value = 'Error';
  }
}
