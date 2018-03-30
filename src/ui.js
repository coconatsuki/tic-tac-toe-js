import Board from './board';

const Ui = (() => {
  const nameSection = document.querySelector('.players-name');
  const boardSection = document.querySelector('.game-board-section');
  const resetButton = document.getElementById('reset');
  const newGameButton = document.getElementById('new-game');
  const victoryMessage = function(playerName) {
    return `${playerName} wins the game! Want to play again?`;
  };
  const evenMessage = 'It\'s a tie, there\'s no winner. Want to play again?';
  const squares = document.querySelectorAll('button.play-button');

  const highlightListener = function() {
    for (const square of squares) {
      square.addEventListener('mouseenter', function() {
        if (!this.classList.contains('highlight')) {
          this.classList.add('highlight');
        }
      });
      square.addEventListener('mouseleave', function() {
        if (this.classList.contains('highlight')) {
          this.classList.remove('highlight');
        }
      });
    }
  };

  const boardDisplay = function() {
    const board = Board.allBoxes();
    squares.forEach((el, index) => {
      el.innerHTML = board[index];
    });
  };

  const makeEmptySquareTransparent = function() {
    squares.forEach((el, index) => {
      if (el.classList.contains('black-color')) {
        el.classList.remove('black-color');
      }
    });
  };

  const cleanBoard = function() {
    Board.resetGrid();
    boardDisplay();
    makeEmptySquareTransparent();
  };

  const displayPlayersInterface = function() {
    nameSection.classList.add('flex');
    nameSection.classList.remove('hide');
    boardSection.classList.remove('flex');
    boardSection.classList.add('hide');
  };

  const displayBoardSection = function() {
    nameSection.classList.add('hide');
    nameSection.classList.remove('flex');
    boardSection.classList.remove('hide');
    boardSection.classList.add('flex');
  };

  const resetButtonListener = function() {
    resetButton.addEventListener('click', cleanBoard);
  };

  const newGameButtonListener = function() {
    newGameButton.addEventListener('click', function() {
      cleanBoard();
      displayPlayersInterface();
    });
  };

  return {
    evenMessage,
    highlightListener,
    victoryMessage,
    boardDisplay,
    resetButtonListener,
    newGameButtonListener,
    displayBoardSection
  };
})();


export default Ui;
