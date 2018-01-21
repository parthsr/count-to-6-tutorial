const destruction = require('./destructor');

test('this is test 1 for the valid input', () => {
  expect(destruction('1', 'parth', 'f@gma.com', 20, 'parth', 'srivastava')).toEqual({ username: 'parth', email: 'f@gma.com' });
});

test('this is test 2 for the different parameter being passed', () => {
  expect(destruction('1', 'parth', 'f@gma.com')).toEqual({ username: 'parth', email: 'f@gma.com' });
});

test('this is test 3 for the no parameter being passed', () => {
  expect(destruction()).toEqual({ username: undefined, email: undefined });
});

test('this is test 4 for only two parameter being passed', () => {
  expect(destruction(1, 'parth')).toEqual({ username: 'parth', email: undefined });
});

test('this is test 5 for empty strings as parameters', () => {
  expect(destruction('', '', '')).toEqual({ username: '', email: '' });
});
