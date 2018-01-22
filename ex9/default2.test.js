const makeImportant = require('./default2');

test('test 1 for use case', () => {
  expect(makeImportant('hello', 6)).toBe('hello!!!!!!');
});

test('test 2 for 1 argument', () => {
  expect(makeImportant('hello')).toBe('hello!!!!!');
});


test('test 3 for empty string argument', () => {
  expect(makeImportant('')).toBe('');
});
