const print = require('./hello.js');

test('testing the hello print', () => {
  expect(print()).toBe('HELLO ES6');
});

test('testing the hello print with different case', () => {
  expect(print()).not.toBe('Hello es6');
});

test('testing the hello print with different string', () => {
  expect(print()).not.toBe('hahaha');
});
