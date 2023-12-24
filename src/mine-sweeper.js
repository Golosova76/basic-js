const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0 || !matrix) {
    return [];
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  const resultMatrix = [];

  for (let r = 0; r < rows; r += 1) {
    let row = [];
    for (let c = 0; c < columns; c += 1) {
      let count = 0;
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          if (i === 0 && j ===0) continue;
          const newRow = r + i;
          const newColumn = c + j;
          if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
            if (matrix[newRow][newColumn]) count +=1;
          }
        }
      }
      row.push(count);
    }
    resultMatrix.push(row);
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
