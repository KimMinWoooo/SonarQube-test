function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  // 이 함수는 사용되지 않아 'Unused function' 이슈를 발생시킵니다.
  function unusedFunction() {
    console.log("This function is never used");
  }
  
  // 이 변수는 선언된 후 사용되지 않아 'Unused variable' 이슈를 발생시킵니다.
  const unusedVariable = "I'm not used anywhere";
  
  module.exports = { add, multiply };