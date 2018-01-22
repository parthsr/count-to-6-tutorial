// let inputs = process.argv.slice(2);
// let result = inputs.map(x=> x[0]).reduce(((acc,word) => acc+word),'' );
function arrow() {
  const inputs = Array.prototype.slice.apply(arguments);
  const result = inputs.map(x => x[0]).reduce(((acc, word) => acc + word), '');

  // function firstChar(word){
  //   return word[0];
  // }
  // function concatenate(acc,letter){
  //   return acc+letter;
  // }
  console.log(`[${inputs}] becomes "${result}"`);
  return (`[${inputs}] becomes "${result}"`);
}

module.exports = arrow;
