const gameBoard = (() => {
  board = ['', '', '', '', '', '', '', '']
  return { board }
})();

const playerFactory = (name, symbol) => {
  return { name, symbol }
};
