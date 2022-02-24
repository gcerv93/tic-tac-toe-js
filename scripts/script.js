const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const gameBoard = (() => {
  const board = [null, null, null, null, null, null, null, null, null];

  const updateBoard = (cell, symbol) => {
    board[cell] = symbol;
  };

  return { board, updateBoard };
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

