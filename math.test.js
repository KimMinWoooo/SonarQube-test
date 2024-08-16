const { add, multiply } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

// 이 테스트는 의도적으로 실패하도록 작성되었습니다.
test('this test will fail', () => {
  expect(add(1, 1)).toBe(3);
});

// multiply 함수에 대한 테스트가 부족합니다. 이는 불완전한 테스트 커버리지를 나타냅니다.