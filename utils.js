function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 이 함수는 복잡성이 높아 'Cognitive Complexity' 이슈를 발생시킬 수 있습니다.
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

module.exports = { capitalizeString, complexFunction };