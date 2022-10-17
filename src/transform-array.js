const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(arr) === false) throw new Error("'arr' parameter must be an instance of the Array!")
  // if(arr.length === 0) return []
  // if(arr.length == 1) return arr
  let res = [...arr], newAr = []
  for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] === "boolean") return arr
  }
  if(res[0] === '--discard-prev') {
    res.splice(0, 1)
    return res
  }
  if(arr.length == 0) return []
  else {
    res.forEach((el, index) => {
      if(el === '--double-next') {
        let leftside = res.slice(0, index)
        let rightside = res.slice(index + 1, res.length)
        newAr.push(...leftside, el[index + 1], ...rightside)
      }
      else if(el === '--double-prev') {
        let leftside = res.slice(0, index)
        let rightside = res.slice(index + 1, res.length)
        newAr.push(...leftside, el[index - 1], ...rightside)
      }
      else if(el === '--discard-next') {
        let leftside = res.slice(0, index)
        let rightside = res.slice(index + 2, res.length)
        newAr.push(...leftside, ...rightside)
      }
      else if(el === '--discard-prev') {
        res.splice(index - 1, 1)
        // let rightside = res.slice(index + 2, res.length)
        newAr.push(...res)
      }
    })
    return newAr
  }
}

module.exports = {
  transform
};
