const html = require('./tag');

const username = 'Daniel';
const comment = '2 < 3';
test('Should work for <b>Daniel says</b>: "2 < 3"', () => {
  expect(html`<b>${username} says</b>: "${comment}"`).toBe('<b>Daniel says</b>: "2 &lt; 3"');
});

test('Should work for no arguments', () => {
  expect(html`<b> says</b>: ""`).toBe(undefined);
});
