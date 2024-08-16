// This file contains math-related functions

// Function with a bug (division by zero possibility)
function divide(a, b) {
    return a / b;  // No check for b being zero
  }
  
  // Correct implementation of addition
  function add(a, b) {
    return a + b;
  }
  
  // Unused function (SonarQube should detect this)
  function multiply(a, b) {
    return a * b;
  }
  
  module.exports = {
    divide,
    add
  };