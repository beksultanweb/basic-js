const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 1, res = '', buffer
  for(let i = 0; i<str.length; i++){
    if(str[i] === str[i+1]) {
      count++
      buffer = str[i]
    }
    else if(count !== 1) {
      res += count + buffer
      count = 1
    }
    else res += str[i]
  }
  return res;
}

module.exports = {
  encodeLine
};
