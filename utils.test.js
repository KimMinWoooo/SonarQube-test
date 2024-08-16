const { capitalizeString, complexFunction } = require('./utils');

test('capitalizes first letter of string', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});

// complexFunction에 대한 테스트가 없습니다. 이는 테스트 커버리지 문제를 발생시킵니다.