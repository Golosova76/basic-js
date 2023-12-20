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
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr.length === 0) {
    return [];
  }
  const copyArray = [...arr];
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  let isFound = false;
  for (let i = 0; i < copyArray.length; i += 1) {
    if (copyArray[i] === discardNext) {
      if (i < copyArray.length - 1) {
        copyArray.splice(i, 2);
        i -= 1;
      } else {
        copyArray.splice(i, 1);
      }
      isFound = true;
      continue;
    }
    if (copyArray[i] === discardPrev) {
      if (i !== 0 && !isFound) {
        copyArray.splice(i - 1, 2);
        i -= 2;
      } else {
        copyArray.splice(i, 1);
        i -= 1;
      }
    }
    if (copyArray[i] === doubleNext) {
      if (i < copyArray.length - 1 && !isFound) {
        copyArray.splice(i, 1, copyArray[i + 1]);
      } else {
        copyArray.splice(i, 1);
      }
    }
    if (copyArray[i] === doublePrev) {
      if (i !== 0 && !isFound) {
        copyArray.splice(i, 1, copyArray[i - 1]);
      } else {
        copyArray.splice(i, 1);
      }
    }
  }
  return copyArray;
}

module.exports = {
  transform
};
