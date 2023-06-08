import React from "react";
import "./Board.css";

interface BoardProps {
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
  winner: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
  boardState: string[];
  setBoardState: React.Dispatch<React.SetStateAction<string[]>>;
}

const Board: React.FC<BoardProps> = ({
  turn,
  setTurn,
  winner,
  setWinner,
  boardState,
  setBoardState,
}): JSX.Element => {
  const isValidMove = (id: string): boolean => {
    let isValid = false;
    for (let i = 0; i < 9; i++) {
      if (String(i) === id && boardState[i] === "") {
        isValid = true;
        break;
      }
    }
    return isValid;
  };

  const checkHorizontally = (boardState: string[]): boolean => {
    for (let i = 0; i < 9; i += 3) {
      let isFound = true;
      for (let j = i; j < i + 3; j += 1) {
        if (boardState[j] === "" || boardState[j] !== boardState[i]) {
          isFound = false;
          break;
        }
      }
      if (isFound) {
        return true;
      }
    }
    return false;
  };

  const checkVertically = (boardState: string[]): boolean => {
    for (let i = 0; i < 3; i += 1) {
      let isFound = true;
      for (let j = i; j < 9; j += 3) {
        if (boardState[j] === "" || boardState[j] !== boardState[i]) {
          isFound = false;
          break;
        }
      }
      if (isFound) {
        return true;
      }
    }
    return false;
  };

  const checkDiagnolly = (boardState: string[]): boolean => {
    const d1 = boardState[0];
    const d2 = boardState[2];
    if (
      boardState[0] === d1 &&
      boardState[4] === d1 &&
      boardState[8] === d1 &&
      boardState[0] !== "" &&
      boardState[4] !== "" &&
      boardState[8] !== ""
    ) {
      return true;
    }
    if (
      boardState[2] === d2 &&
      boardState[4] === d2 &&
      boardState[6] === d2 &&
      boardState[2] !== "" &&
      boardState[4] !== "" &&
      boardState[6] !== ""
    ) {
      return true;
    }
    return false;
  };

  const checkWinner = (boardState: string[]): void => {
    const horizontally = checkHorizontally(boardState);
    const vertically = checkVertically(boardState);
    const diagonally = checkDiagnolly(boardState);
    console.log("ver", horizontally, vertically, diagonally);
    if (horizontally || vertically || diagonally) {
      const winner = turn === 0 ? "PlayerA" : "PlayerB";
      setWinner(winner);
    }
  };

  const handleClick = (e: any): void => {
    const { id } = e.target;
    console.log("handleId", id, typeof id);
    const symbol = turn === 0 ? "X" : "O";
    if (isValidMove(id)) {
      console.log("valid");
      const updatedBoard = boardState.map((val, ind) => {
        if (String(ind) === id) {
          return symbol;
        }
        return boardState[ind];
      });

      setBoardState(updatedBoard);
      checkWinner(updatedBoard);
      setTurn((prev) => {
        if (prev === 0) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  };
  return (
    <div
      className="boardWrapper"
      onClick={winner === "" ? handleClick : () => {}}
    >
      <div className="boardContainer">
        <div id="0" className="gridItem">
          {boardState[0]}
        </div>
        <div id="1" className="gridItem">
          {boardState[1]}
        </div>
        <div id="2" className="gridItem">
          {boardState[2]}
        </div>
        <div id="3" className="gridItem">
          {boardState[3]}
        </div>
        <div id="4" className="gridItem">
          {boardState[4]}
        </div>
        <div id="5" className="gridItem">
          {boardState[5]}
        </div>
        <div id="6" className="gridItem">
          {boardState[6]}
        </div>
        <div id="7" className="gridItem">
          {boardState[7]}
        </div>
        <div id="8" className="gridItem">
          {boardState[8]}
        </div>
      </div>
    </div>
  );
};

export default Board;
