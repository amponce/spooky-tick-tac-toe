import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Board, Winner } from "./components/Board";
import { StartScreen } from "./components/StartScreen";
import { ResetScreen } from "./components/ResetScreen";

import "./styles.css";

const Heading = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  font-size: 5rem;
  text-shadow: rgba(0, 0, 0, 0.4) -3px 3px;
  font-family: "Varela Round";
`;

const variants = {
  game: {
    opacity: 1,
    scale: 1,
    width: "520px",
    height: "520px",
    transition: { type: "spring", duration: 0.8 }
  },
  start: {
    opacity: 1,
    scale: 1,
    width: "200px",
    height: "100px",
    transition: { type: "spring", duration: 0.8 }
  },
  reset: {
    opacity: 1,
    scale: 1,
    width: "350px",
    height: "300px",
    transition: { type: "spring", duration: 0.8 }
  },
  hidden: { opacity: 0, scale: 0.8 }
};

const BoardContainer = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants
}))`
  background: #fff;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type GameState = "start" | "game" | "reset";

function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>("start");

  const onStart = () => {
    setGameState("game");
  };

  const onGameEnd = (winner: Winner) => {
    setWinner(winner);
    setGameState("reset");
  };

  const onReset = () => {
    setWinner(undefined);
    setGameState("game");
  };

  return (
    <>
      <Heading>Spooky Tic-Tac-Toe</Heading>
      <BoardContainer animate={gameState}>
        {
          {
            start: <StartScreen onStart={onStart} />,
            game: <Board onGameEnd={onGameEnd} />,
            reset: <ResetScreen winner={winner} onReset={onReset} />
          }[gameState]
        }
      </BoardContainer>
    </>
  );
}

export default App;
