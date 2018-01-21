function testing() {
  return (`Hello, ${arguments[0]}!
Your name lowercased is "${arguments[0].toLowerCase()}".`);
}

module.exports = testing;
