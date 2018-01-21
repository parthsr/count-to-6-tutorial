const defaults = require('./default1');

test('This is test 1 for the use case', () => {
  expect(defaults(1, 2)).toBe(1.5);
});

test('This is test 2 by missing an argument', () => {
  expect(defaults(1)).toBe(1);
});

test('This is test 3 for the use case', () => {
  expect(defaults(undefined, 1)).toBe(0.5);
});

test('This is test 4 for the use case', () => {
  expect(defaults(undefined, undefined)).toBe(0.5);
});

test('This is test 5 by addig 3 parameters', () => {
  expect(defaults(5, 4, 3)).toBe(4.5);
});

test('This is test 5 by addig 3 parameters', () => {
  expect(defaults()).toBe(0.5);
});
