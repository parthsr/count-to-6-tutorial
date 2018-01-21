// let arr = process.argv.slice(2);
//
// console.log(`The minimum of [${arr}] is ${Math.min(...arr)}`);
function spread() {
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);
  return (`The minimum of [${arr}] is ${Math.min(...arr)}`);
}
module.exports = spread;
