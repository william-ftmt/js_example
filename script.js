// script.js
const display = document.getElementById('display');

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Calculate expression
function calculate() {
  try {
    // Only allow digits, operators, parentheses, and dot
    if (/^[0-9+\-*/().\s]+$/.test(display.value)) {
      display.value = Function(`"use strict"; return (${display.value})`)();
    } else {
      display.value = 'Error';
    }
  } catch {
    display.value = 'Error';
  }
}

// Attach event listeners to buttons
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('clear')) {
      clearDisplay();
    } else if (button.classList.contains('equal')) {
      calculate();
    } else {
      const value = button.dataset.value;
      appendValue(value);
    }
  });
});
