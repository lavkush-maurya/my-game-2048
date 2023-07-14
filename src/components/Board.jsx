"use client";
import React from "react";

import Row from "./Row";
import Message from "./Message";

const Board = ({ boardState, gameOverState, score, newGameButtonHandler }) => {
  const renderRows = () => {
    return boardState.map((item, i) => {
      return <Row rowState={item} rowNum={i} key={i} />;
    });
  };

  return (
    <div className="board">
      {renderRows()}
      <Message
        gameOverState={gameOverState}
        score={score}
        newGameButtonHandler={newGameButtonHandler}
      />
    </div>
  );
};

export default Board;
