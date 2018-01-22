const html = require('./tag');

const username = 'Daniel';
const comment = '2 < 3';
test('Should work for <b>Daniel says</b>: "2 < 3"', () => {
  expect(html`<b>${username} says</b>: "${comment}"`).toBe('<b>Daniel says</b>: "2 &lt; 3"');
});

test('would not work for no arguments', () => {
  expect(html`<b> says</b>: ""`).toBe(undefined);
});

usernam = 'D<a<n>i<el';
test('Should work for <b>D<a<n<i<el says</b>: "2 < 3"', () => {
  expect(html`<b>${usernam} says</b>: "${comment}"`).toBe('<b>D&lt;a&lt;n&gt;i&lt;el says</b>: "2 &lt; 3"');
});
