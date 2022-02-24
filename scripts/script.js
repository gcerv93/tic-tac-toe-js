const playerFactory = (symbol) => {
  return { symbol };
};

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const updateBoard = (cell, symbol) => {
    board[cell] = symbol;
  };

  return { board, updateBoard };
})();

const displayController = (() => {
  const cells = document.querySelectorAll('[data-index]');

  const updateDisplay = (board) => {
    board.forEach((cell, index) => {
      const displayCell = document.querySelector(`[data-index="${index}"]`);
      displayCell.textContent = cell;
    });
  };

  return { updateDisplay, cells };
})();

const gameController = (() => {
  const playerone = playerFactory('X');
  const playertwo = playerFactory('O');
  let currentPlayer = playerone;

  const _changeCurrPlayer = () => {
    currentPlayer = currentPlayer === playerone ? playertwo : playerone
  }

  const _clickHandler = (e) => {
    if (e.target.textContent === '') {
      gameBoard.updateBoard(e.target.dataset.index, currentPlayer.symbol);
      displayController.updateDisplay(gameBoard.board);
      _changeCurrPlayer();
    };
  };

  displayController.cells.forEach((cell) => {
    cell.addEventListener('click', _clickHandler);
  });
})();
