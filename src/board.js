const Board = (() => {
  const grid = [['', '', ''], ['', '', ''], ['', '', '']];
  const col1 = [grid[0][1], grid[1][1], grid[2][1]];
  const col2 = [grid[0][2], grid[1][2], grid[2][3]];
  const col3 = [grid[0][2], grid[1][2], grid[2][2]];
  const cols = [col1, col2, col3];
  const diag1 = [grid[0][0], grid[1][1], grid[2][2]];
  const diag2 = [grid[0][2], grid[1][1], grid[2][0]];

  const allBoxes = function() {
    return [...grid[0], ...grid[1], ...grid[2]];
  };

  const writeSymbol = function(positionArray, symbol) {
    const [x, y] = positionArray;
    grid[x][y] = symbol;
  };

  const isAvailable = function(positionArray) {
    const [x, y] = positionArray;
    return grid[x][y] === '';
  }

  const fillGridForTesting = function() {
    grid.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        grid[rowIndex][colIndex] = 'X';
      });
    });
  };

  const resetGrid = function() {
    grid.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        grid[rowIndex][colIndex] = '';
      });
    });
  };

  const victoryConditions = function() {
    for (const row of grid) {
      if (row.every(box => box === 'X')) { return 'X'; }
      else if (row.every(box => box === 'O')) { return 'O'; }
    }
    for (const col of cols) {
      if (col.every(box => box === 'X')) { return 'X'; }
      else if (col.every(box => box === 'O')) { return 'O'; }
    }
    if (diag1.every(box => box === 'X')) { return 'X'; }
    if (diag1.every(box => box === 'O')) { return 'O'; }
    if (diag2.every(box => box === 'X')) { return 'X'; }
    if (diag2.every(box => box === 'O')) { return 'O'; }
    return false;
  };

  const evenConditions = function() {
    if (allBoxes().every(square => square !== '')) { return true; }
    return false;
  };
  return { allBoxes, grid, isAvailable, evenConditions, fillGridForTesting,
    resetGrid, victoryConditions, writeSymbol };
})();

export default Board;
