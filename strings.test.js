let testing = require('./stringsssss');

test('testing the function', function(){
  expect(testing('PARTH')).toBe(`Hello, PARTH!
Your name lowercased is "parth".`);
});


test('testing the function', function(){
  expect(testing('')).toBe(`Hello, !
Your name lowercased is "".`);
});
