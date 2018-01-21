const userArray = process.argv.slice(2);
const data = {};
[, data.username, data.email] = userArray;
console.log(data);
// function destruction() {
//   const arr = Array.prototype.slice.call(arguments);
//   console.log(arr);
//   const data = {};
//   [, data.username, data.email] = arr;
//   return data;
// }
//
// module.exports = destruction;
