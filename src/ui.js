const Ui = (() => {
  const victoryMessage = function(playerName) {
    return `${playerName} wins the game! Want to play again?`;
  };
  const evenMessage = 'It\'s a tie, there\'s no winner. Want to play again?';
  const squares = document.querySelectorAll('button.play-button');

  const highlightListener = function() {
    for (const square of squares) {
      square.addEventListener('mouseenter', function() {
        if (!this.classList.contains("highlight")) {
          this.classList.add('highlight');
        }
      });
    }
  };

  const removeHighlightListener = function() {
    for (const square of squares) {
      square.addEventListener('mouseleave', function() {
        if (this.classList.contains("highlight")) {
          this.classList.remove('highlight');
        }
      });
    }
  };
  return { evenMessage, highlightListener, removeHighlightListener, victoryMessage, squares };
})();

<<<<<<< HEAD
export default Ui
=======
export default Ui;
>>>>>>> 80a47a4caaa6434362126994ba5eb0fabf11b9fb
