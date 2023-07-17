"use client";
import "./index.css";
import { useState, useEffect } from "react";
import TitleAndScore from "@/components/TitleAndScore";
import BoardComponent from "@/components/Board";
import handleKeyDown from "@/functions/handleKeyDown";
import { handleMobileKeyDown } from "@/functions/handleKeyDown";
import isGameOver from "@/functions/isGameOver";
import generateNewNumber from "@/functions/generateNewNumber";
import Navbar from "@/components/Navbar";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

function Game() {
  //mobile view
  const [isMobile] = useMediaQuery("(max-width:  768px)");
  const handleButtonClick = (direction) => {
    handleMobileKeyDown(
      direction,
      Board,
      setBoard,
      Score,
      setScore,
      setGameOver
    );
  };
  //mobile view

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
          {isMobile ? (
            <Button margin={"0 20px"} onClick={() => handleButtonClick("up")}>
              Up
            </Button>
          ) : (
            ""
          )}
          <Flex alignItems={"center"}>
            {isMobile ? (
              <Button
                height={"200px"}
                onClick={() => handleButtonClick("left")}
              >
                Left
              </Button>
            ) : (
              ""
            )}
            <BoardComponent
              boardState={Board}
              gameOverState={GameOver}
              score={Score}
              newGameButtonHandler={newGame}
            />
            {isMobile ? (
              <Button
                height={"200px"}
                onClick={() => handleButtonClick("right")}
              >
                Right
              </Button>
            ) : (
              ""
            )}
          </Flex>

          {isMobile ? (
            <Button margin={"0 20px"} onClick={() => handleButtonClick("down")}>
              Down
            </Button>
          ) : (
            ""
          )}

          {/* mobile view */}
          {/* {isMobile ? (
            <Flex marginTop="20px" justifyContent={"space-evenly"}>
              <Button
                marginRight="10px"
                onClick={() => handleButtonClick("up")}
              >
                Up
              </Button>
              <Button
                marginRight="10px"
                onClick={() => handleButtonClick("right")}
              >
                Right
              </Button>
              <Button
                marginRight="10px"
                onClick={() => handleButtonClick("down")}
              >
                Down
              </Button>
              <Button onClick={() => handleButtonClick("left")}>Left</Button>
            </Flex>
          ) : (
            ""
          )} */}
          {/* mobile view */}

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
