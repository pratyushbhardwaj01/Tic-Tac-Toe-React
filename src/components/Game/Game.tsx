import React, { useState } from "react";
import Board from "../Board/Board";
import "./Game.css";
import Footer from "../Footer/Footer";

const initialState: string[] = ["", "", "", "", "", "", "", "", ""];
const Game = (): JSX.Element => {
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState("");
  const [boardState, setBoardState] = useState(initialState);

  const handleReset = (): void => {
    setTurn(0);
    setWinner("");
    setBoardState(initialState);
  };

  return (
    <div className="gameWrapper">
      <div className="boardWrapper">
        <Board
          turn={turn}
          setTurn={setTurn}
          winner={winner}
          setWinner={setWinner}
          boardState={boardState}
          setBoardState={setBoardState}
        />
      </div>
      <Footer winner={winner} onReset={handleReset} />
    </div>
  );
};

export default Game;
