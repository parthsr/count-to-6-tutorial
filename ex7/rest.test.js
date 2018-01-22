const rest = require('./rests');

test('this is test 1 to check the use case', () => {
  expect(rest(1, 2, 3)).toBe(2);
});

test('this is test 2 to check with one argument', () => {
  expect(rest(1)).toBe(1);
});

test('this is test 3 for decimal values', () => {
  expect(rest(0.01, 0.02)).toBe(0.015);
});
