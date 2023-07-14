const boardHasMoved = (Board, newBoard) => {
  return JSON.stringify(Board) !== JSON.stringify(newBoard);
};

export default boardHasMoved;
