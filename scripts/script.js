const playerFactory = (symbol) => {
  return { symbol };
};

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const updateBoard = (cell, symbol) => {
    board[cell] = symbol;
  };

  function checkWins(symbol) {
    return (
      _checkRowWin(symbol) || _checkColumnWin(symbol) || _checkDiagonalWin(symbol)
    );
  };

  function _checkRowWin(symbol) {
    return (
      board.slice(0, 3).every((element) => element === symbol) ||
      board.slice(3, 6).every((element) => element === symbol) ||
      board.slice(6, 9).every((element) => element === symbol)
    );
  };

  function _checkColumnWin(symbol) {
    firstColumn = [board[0], board[3], board[6]];
    secondColumn = [board[1], board[4], board[7]];
    thirdColumn = [board[2], board[5], board[8]];

    return (
      firstColumn.every((element) => element === symbol) ||
      secondColumn.every((element) => element === symbol) ||
      thirdColumn.every((element) => element === symbol)
    );
  };

  function _checkDiagonalWin(symbol) {
    leftToRight = [board[0], board[4], board[8]];
    rightToLeft = [board[2], board[4], board[6]];

    return (
      leftToRight.every((element) => element === symbol) ||
      rightToLeft.every((element) => element === symbol)
    );
  };

  return { board, updateBoard, checkWins };
})();

const displayController = (() => {
  const cells = document.querySelectorAll('[data-index]');

  // get sent a board and update the display with its values
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

  // not finished
  function _handleWins() {
    if (gameBoard.checkWins(currentPlayer.symbol)) {
      _removeEventListeners();
    };
  };

  // change the current player so that the correct symbol will display
  const _changeCurrPlayer = () => {
    currentPlayer = currentPlayer === playerone ? playertwo : playerone
  };

  // one turn === one click, equivalent to a turn handler
  const _clickHandler = (e) => {
    if (e.target.textContent === '') {
      gameBoard.updateBoard(e.target.dataset.index, currentPlayer.symbol);
      displayController.updateDisplay(gameBoard.board);
      _handleWins();
      _changeCurrPlayer();
    };
  };

  // to call when there's a win on the board
  function _removeEventListeners() {
    displayController.cells.forEach((cell) => {
      cell.removeEventListener('click', _clickHandler);
    });
  };

  // event listener for grid cells, in game so that the clickHandler can access
  // the necessary data
  displayController.cells.forEach((cell) => {
    cell.addEventListener('click', _clickHandler);
  });
})();
