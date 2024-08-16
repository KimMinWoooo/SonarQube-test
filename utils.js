// This file contains utility functions

// Function with high cognitive complexity (SonarQube should flag this)
function complexFunction(a, b, c) {
    if (a > b) {
      if (b > c) {
        if (a > c) {
          return a;
        } else {
          return c;
        }
      } else {
        if (a > c) {
          return a;
        } else {
          return c;
        }
      }
    } else {
      if (b > c) {
        return b;
      } else {
        return c;
      }
    }
  }
  
  // Function with security vulnerability (use of eval)
  function unsafeEval(input) {
    return eval(input);
  }
  
  module.exports = {
    complexFunction,
    unsafeEval
  };