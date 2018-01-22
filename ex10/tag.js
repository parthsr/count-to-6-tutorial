
function html(stringss, arg1, arg2) {
  if (arg1 === undefined || arg2 === undefined) {
    return undefined;
  }
  const first = arg1.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;')
    .replace(/>/g, '&gt;');
  const second = arg2.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;')
    .replace(/>/g, '&gt;');

  return stringss[0] + first + stringss[1] + second + stringss[2];
}

// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

module.exports = html;
