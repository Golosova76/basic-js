const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCats = 0;
  if (matrix.length > 0) {
    const row = matrix.length;
    const column = matrix[0].length;
    for (let i = 0; i < row; i += 1) {
      for (let j = 0; j < column; j += 1) {
        if (matrix[i][j] === '^^') {
          countCats += 1;
        }
      }
    }
  }
  return countCats;
}

module.exports = {
  countCats
};
