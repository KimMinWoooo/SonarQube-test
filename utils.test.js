const { capitalizeString } = require('./utils');

test('capitalizes first letter of string', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});