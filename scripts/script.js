const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

const displayController = (() => {
  const updateDisplay = (board) => {
    board.forEach((cell, index) => {
      const displayCell = document.querySelector(`[data-index="${index}"]`);
      displayCell.textContent = cell;
    });
  };

  return { updateDisplay };
})();

// temp for checking display
// const board = gameBoard.board;
// displayController.updateDisplay(board);
