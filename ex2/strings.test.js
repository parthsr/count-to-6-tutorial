const testing = require('./stringsssss');

test('testing the function', () => {
  expect(testing('PARTH')).toBe(`Hello, PARTH!
Your name lowercased is "parth".`);
});


test('testing the function test 2', () => {
  expect(testing('')).toBe(`Hello, !
Your name lowercased is "".`);
});

test('testing the function test 3 mixed case', () => {
  expect(testing('HeLlO')).toBe(`Hello, HeLlO!
Your name lowercased is "hello".`);
});
