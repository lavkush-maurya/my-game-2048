"use client";
import React from "react";

const Message = ({ gameOverState, score, newGameButtonHandler }) => {
  return (
    <div className={`message ${gameOverState.isGameOver ? "game-over" : ""}`}>
      <p>{gameOverState.message}</p>
      <span>score: {score}</span>
      <button className="button" onClick={newGameButtonHandler}>
        Play again
      </button>
    </div>
  );
};

export default Message;
