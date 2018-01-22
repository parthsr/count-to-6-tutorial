// TO VERIFY IN  COUNT-TO-6
console.log(`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`);


// FOR TESTING
function testing() {
  return (`Hello, ${arguments[0]}!
Your name lowercased is "${arguments[0].toLowerCase()}".`);
}
module.exports = testing;
