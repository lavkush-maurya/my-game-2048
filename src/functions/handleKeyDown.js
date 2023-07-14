import generateNewNumber from "./generateNewNumber";
import boardHasMoved from "./boardHasMoved";

// this function separates numbers and 0s
// it is used by the function combineNumbers
const shiftBoard = (Board, direction) => {
  let shiftedBoard = [];
  for (let row = 0; row < Board.length; row++) {
    let newRow = [];
    if (direction === "left") {
      for (let col = Board[row].length - 1; col >= 0; col--) {
        let item = Board[row][col];
        item === 0 ? newRow.push(item) : newRow.unshift(item);
      }
    } else {
      for (let col = 0; col < Board[row].length; col++) {
        let item = Board[row][col];
        item === 0 ? newRow.unshift(item) : newRow.push(item);
      }
    }
    shiftedBoard.push(newRow);
  }
  return shiftedBoard;
};

// function that combines equal numbers next to eachother
// works with directions "left" or "right" as default
export const combineNumbers = (
  Board,
  direction,
  Score = 0,
  setScore = () => {},
  setGameOver = () => {}
) => {
  let newBoard = shiftBoard(Board, direction);
  for (let row = 0; row < 4; row++) {
    if (direction === "left") {
      for (let col = 0; col < 3; col++) {
        if (
          newBoard[row][col] > 0 &&
          newBoard[row][col] === newBoard[row][col + 1]
        ) {
          newBoard[row][col]++;
          newBoard[row][col + 1] = 0;
          let newScore = Score + 2 ** newBoard[row][col];
          setScore(newScore);
          if (newBoard[row][col] === 11)
            setGameOver({ isGameOver: true, message: "You won!" });
        }
      }
    } else {
      for (let col = 3; col > 0; col--) {
        if (
          newBoard[row][col] > 0 &&
          newBoard[row][col] === newBoard[row][col - 1]
        ) {
          newBoard[row][col]++;
          newBoard[row][col - 1] = 0;
          let newScore = Score + 2 ** newBoard[row][col];
          setScore(newScore);
          if (newBoard[row][col] === 11)
            setGameOver({ isGameOver: true, message: "You won!" });
        }
      }
    }
  }

  return shiftBoard(newBoard, direction);
};

// rotates the Board clockwise("right") or counter-clockwise("left")
const rotateBoard = (Board, direction) => {
  let rotatedBoard = [];
  if (direction === "left") {
    for (let row = 3; row >= 0; row--) {
      let newRow = [];
      for (let col = 0; col < 4; col++) {
        newRow.push(Board[col][row]);
      }
      rotatedBoard.push(newRow);
    }
  } else {
    for (let row = 0; row < 4; row++) {
      let newRow = [];
      for (let col = 3; col >= 0; col--) {
        newRow.push(Board[col][row]);
      }
      rotatedBoard.push(newRow);
    }
  }
  return rotatedBoard;
};

// rotates the board counter-clockwise, combines the number and
// rotates the board again to it's original state
export const rotateAndCombine = (
  Board,
  direction,
  Score = 0,
  setScore = () => {},
  setGameOver = () => {}
) => {
  let newBoard = rotateBoard(Board, "left");
  newBoard = combineNumbers(
    newBoard,
    direction === "up" ? "left" : "right",
    Score,
    setScore,
    setGameOver
  );
  newBoard = rotateBoard(newBoard, "right");
  return newBoard;
};

const handleKeyDown = (e, Board, setBoard, Score, setScore, setGameOver) => {
  let direction;
  let newBoard = Board;
  switch (e.keyCode) {
    case 38:
    case 87:
      direction = "up";
      newBoard = rotateAndCombine(
        Board,
        direction,
        Score,
        setScore,
        setGameOver
      );
      break;
    case 40:
    case 83:
      direction = "down";
      newBoard = rotateAndCombine(
        Board,
        direction,
        Score,
        setScore,
        setGameOver
      );
      break;
    case 39:
    case 68:
      direction = "right";
      newBoard = combineNumbers(Board, direction, Score, setScore, setGameOver);
      break;
    case 37:
    case 65:
      direction = "left";
      newBoard = combineNumbers(Board, direction, Score, setScore, setGameOver);
      break;
  }
  if (boardHasMoved(Board, newBoard)) {
    generateNewNumber(newBoard);
    setBoard(newBoard);
  }
};

export default handleKeyDown;
