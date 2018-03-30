// import _ from 'loadash';
import Ui from './ui';
import Board from './board';
import Player from './player';

const Game = (() => {
  const nameButton = document.getElementById('name-confirm');
  const nameInput1 = document.getElementById('name1');
  const nameInput2 = document.getElementById('name2');
  const squares = document.querySelectorAll('button.play-button');
  const resetButton = document.getElementById('reset');
  const newGameButton = document.getElementById('new-game');

    let player1 = '';
  let player2 = '';
  let actualPlayer = player1;

  const getPlayersNames = function() {
    const playerName1 = nameInput1.value ? nameInput1.value : 'Player1';
    const playerName2 = nameInput2.value ? nameInput2.value : 'Player2';
    return [playerName1, playerName2];
  };

  const createPlayers = function(p1, p2) {
    player1 = Player(p1, 'X');
    player2 = Player(p2, 'O');
    actualPlayer = player1;
  };

  const nameButtonListener = function() {
    nameButton.addEventListener('click', function() {
      const names = getPlayersNames();
      Ui.displayBoardSection();
      createPlayers(names[0], names[1]);
      Ui.playerTurnMessage(actualPlayer.name);
    });
  };

  const getPositionFromSquareElement = function(square) {
    return [...square.dataset.id].map(el => Number(el));
  };

  const togglePlayer = function() {
    [player1, player2] = [player2, player1];
    actualPlayer = player1;
  };

  const checkVictory = function() {
    return Board.victoryConditions();
  };

  const play = function(squareId, square) {
    Board.writeSymbol(squareId, actualPlayer.symbol);
    square.classList.add('black-color');
    Ui.boardDisplay();
    if (checkVictory()) {
      Ui.victoryMessage(actualPlayer.name);
    } else {
      togglePlayer();
      Ui.playerTurnMessage(actualPlayer.name);
    }
  };

  const squareListener = function() {
    for (const square of squares) {
      square.addEventListener('click', function() {
        const squareId = getPositionFromSquareElement(square);
        if (Board.availableSquare(squareId)) {
          play(squareId, square);
        }
      });
    }
  };

  const resetButtonListener = function() {
    resetButton.addEventListener('click', function() {
      Ui.cleanBoard();
      if (actualPlayer.symbol === 'O') { togglePlayer() };
      Ui.playerTurnMessage(actualPlayer.name);
    });
  };

  const newGameButtonListener = function() {
    newGameButton.addEventListener('click', function() {
      Ui.cleanBoard();
      Ui.displayPlayersInterface();
    });
  };

  return {
    nameButtonListener,
    squareListener,
    getPositionFromSquareElement,
    resetButtonListener,
    newGameButtonListener,
  };
})();


Ui.highlightListener();
Ui.addSpaceToSquare();
Game.resetButtonListener();
Game.newGameButtonListener();
Game.nameButtonListener();
Game.squareListener();
