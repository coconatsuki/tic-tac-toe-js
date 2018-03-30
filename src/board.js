const Board = (() => {
  const grid = [['E', 'E', 'E'], ['E', 'E', 'E'], ['E', 'E', 'E']];

  const allBoxes = function() {
    return [...grid[0], ...grid[1], ...grid[2]];
  };

  const col1 = function() {
    return [grid[0][0], grid[1][0], grid[2][0]];
  };

  const col2 = function() {
    return [grid[0][1], grid[1][1], grid[2][1]];
  };

  const col3 = function() {
    return [grid[0][2], grid[1][2], grid[2][2]];
  };

  const cols = function() {
    return [col1(), col2(), col3()];
  };

  const diag1 = function() {
    return [grid[0][0], grid[1][1], grid[2][2]];
  };

  const diag2 = function() {
    return [grid[0][2], grid[1][1], grid[2][0]];
  };

  const writeSymbol = function(positionArray, symbol) {
    const [x, y] = positionArray;
    grid[x][y] = symbol;
  };

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
        grid[rowIndex][colIndex] = 'E';
      });
    });
  };

  const victoryConditions = function() {
    for (const row of grid) {
      if (row.every(box => box === 'X')) { return 'X'; } else if (row.every(box => box === 'O')) { return 'O'; }
    }
    for (const col of cols()) {
      if (col.every(box => box === 'X')) { return 'X'; } else if (col.every(box => box === 'O')) { return 'O'; }
    }
    if (diag1().every(box => box === 'X')) { return 'X'; }
    if (diag1().every(box => box === 'O')) { return 'O'; }
    if (diag2().every(box => box === 'X')) { return 'X'; }
    if (diag2().every(box => box === 'O')) { return 'O'; }
    return false;
  };

  const evenConditions = function() {
    if (allBoxes().every(square => square !== 'E')) { return true; }
    return false;
  };

  const availableSquare = function(position) {
    const [x, y] = position;
    return grid[x][y] === 'E';
  };

  return {
    allBoxes,
    grid,
    evenConditions,
    fillGridForTesting,
    resetGrid,
    victoryConditions,
    writeSymbol,
    availableSquare,
  };
})();

export default Board;
