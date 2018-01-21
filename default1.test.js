const defaults = require('./default1');

test('This is test 1 for the use case', () => {
  expect(defaults(1, 2)).toBe(1.5);
});
