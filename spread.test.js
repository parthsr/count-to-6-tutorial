const spread = require('./spread');

test('this is test1 ', () => {
  expect(spread(1, 2)).toBe('The minimum of [1,2] is 1');
});

test('this is test 2 with only one parameter', () => {
  expect(spread(1)).toBe('The minimum of [1] is 1');
});
