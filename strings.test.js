let testing = require('./stringsssss');

test('testing the function', function(){
  expect(testing('PARTH')).toBe(`Hello, parth!
Your name lowercased is "parth".`);
});
