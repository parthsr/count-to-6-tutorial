let print = require('./hello.js');

test('testing the hello print', function(){
  expect(print()).toBe('HELLO ES6');
});

test('testing the hello print with different case', function(){
  expect(print()).not.toBe('Hello es6');
});
