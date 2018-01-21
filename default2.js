function makeImportant(sentence, mark = sentence.length) {
  return (sentence + Array(mark + 1).join('!'));
}

module.exports = makeImportant;
