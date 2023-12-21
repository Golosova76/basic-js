const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let count = 0;
  if (matrix.length > 0) {
    const row = matrix.length;
    const column = matrix[0].length;
    for (let j = 0; j < column; j += 1) {
      for (let i = 0; i < row; i += 1) {
        if (matrix[i][j] === 0) {
          break;
        }
        count += matrix[i][j];
      }
    }
  }
  return count;
}

module.exports = {
  getMatrixElementsSum
};
