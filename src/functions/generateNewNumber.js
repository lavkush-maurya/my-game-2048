// gets the coords of all empty tiles and returns an array with them
const searchEmptyTiles = (Board) => {
  let emptyTiles = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (Board[row][col] === 0) emptyTiles.push([row, col]);
    }
  }
  return emptyTiles;
};

// gets a random set of coords, which gets the name index and adds a 2 on the board
const generateNewNumber = (Board) => {
  let emptyTiles = searchEmptyTiles(Board);
  let index = Math.floor(Math.random() * emptyTiles.length);
  Board[emptyTiles[index][0]][emptyTiles[index][1]]++;
};

export default generateNewNumber;
