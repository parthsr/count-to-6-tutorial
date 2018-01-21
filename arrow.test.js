const arrow = require('./arrow');

test('this is the first test to check its use case', () => {
  expect(arrow('parth', 'is', 'cool')).toBe('[parth,is,cool] becomes "pic"');
});

test('this is the 2nd test to check with no arguments', () => {
  expect().toBe(undefined);
});

test('this is the third test to check with numbers in strings', () => {
  expect(arrow('123', 'parth')).toBe('[123,parth] becomes "1p"');
});

test('this is the fourth test to check with empty strings as arguments', () => {
  expect(arrow('', '')).toBe('[,] becomes "undefinedundefined"');
});
