function makeImportant(sentence, mark = sentence.length) {
  return (sentence + '!'.repeat(mark));
}

module.exports = makeImportant;
