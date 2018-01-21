const makeImportant = require('./default2');

test('test 1 for use case', () => {
  expect(makeImportant('hello', 5)).toBe('hello!!!!!');
});
