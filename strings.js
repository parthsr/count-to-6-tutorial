// function testing(){
//   let name = 'parth';
//   console.log(name);
//
//   return (`Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`);
// }
//
// module.exports = testing;
console.log(`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`);
