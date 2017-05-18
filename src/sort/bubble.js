function normalCompare(prev, next) {
  if (prev < next) {
    return -1;
  } else if (prev == next) {
    return 0;
  } else {
    return 1;
  }
}
/**
 * explaining here: https://visualgo.net/en/sorting?slide=5
 * 
 * @param {Array} src - source data, it should be an Array
 * @return {Array}
 */
function sort (src, comp = normalCompare) {
  if (! (src instanceof Array)) {
    throw new Error('expect param 1 to be an Array')
  }
  let result = [].concat(src);

  for (let i = 0, len = result.length; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // if prev value greater than next value, just exchange them
      if (comp(result[j], result[j + 1]) === 1) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}
module.exports = sort;