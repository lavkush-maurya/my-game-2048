import { combineNumbers, rotateAndCombine } from "./handleKeyDown";
import boardHasMoved from "./boardHasMoved";

const contains0 = (Board) => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (Board[row][col] === 0) return true;
    }
  }
};

const isGameOver = (Board, setGameOver) => {
  if (
    !boardHasMoved(Board, rotateAndCombine(Board, "up")) &&
    !boardHasMoved(Board, rotateAndCombine(Board, "down")) &&
    !boardHasMoved(Board, combineNumbers(Board, "left")) &&
    !boardHasMoved(Board, combineNumbers(Board, "right")) &&
    !contains0(Board)
  ) {
    setGameOver({ isGameOver: true, message: "Game Over" });
  }
};

export default isGameOver;
