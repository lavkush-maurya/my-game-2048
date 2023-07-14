"use client";
import "./index.css";
import { useState, useEffect } from "react";
import TitleAndScore from "@/components/TitleAndScore";
import BoardComponent from "@/components/Board";
import handleKeyDown from "@/functions/handleKeyDown";
import isGameOver from "@/functions/isGameOver";
import generateNewNumber from "@/functions/generateNewNumber";
import Navbar from "@/components/Navbar";

function Game() {
  const [Board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [GameOver, setGameOver] = useState({
    isGameOver: false,
    message: "Game Over",
  });
  const [Score, setScore] = useState(0);

  // this function and useEffect cleans the previous keydown listener and adds a new one
  const keyDownHandlerFunction = (e) => {
    handleKeyDown(e, Board, setBoard, Score, setScore, setGameOver);
  };

  // new game
  const newGame = () => {
    let newGameBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    setGameOver({ isGameOver: false });
    setScore(0);
    generateNewNumber(newGameBoard);
    generateNewNumber(newGameBoard);
    setBoard(newGameBoard);
  };

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    if (!GameOver.isGameOver) {
      document.body.addEventListener("keydown", keyDownHandlerFunction);
    }
    isGameOver(Board, setGameOver);
    return () => {
      document.body.removeEventListener("keydown", keyDownHandlerFunction);
    };
  }, [Board]);

  return (
    <>
      <Navbar />

      <div className="game">
        <div className="game-container">
          <TitleAndScore Score={Score} />
          <button className="button button-ng" onClick={newGame}>
            New Game
          </button>
          <BoardComponent
            boardState={Board}
            gameOverState={GameOver}
            score={Score}
            newGameButtonHandler={newGame}
          />
          <p className="htp">
            <span>How to play:</span> Use your arrow keys to move the tiles.
            Tiles with the same number merge into one when they touch. Add them
            up to reach 2048!
          </p>
        </div>
      </div>
    </>
  );
}

export default Game;
