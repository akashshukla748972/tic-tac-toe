import React, { useEffect, useState } from "react";
import Item from "./Item";
import WinnerPopup from "./WinnerPopup";
import swal from "sweetalert";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTern, setIsXTern] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const PlayAgain = () => {
    setState(Array(9).fill(null));
    setIsXTern(true);
    checkWinner();
  };

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTern ? "X" : "0";
    setState(copyState);
    setIsXTern(!isXTern);
  };

  useEffect(() => {
    swal("Welcom to our site, now you can play tic-tac-toe game");
  }, []);

  return (
    <div className="w-full h-[80vh]  bg-white flex justify-center items-center">
      {isWinner ? (
        <WinnerPopup
          onClick={() => {
            PlayAgain();
          }}
          winner={isWinner}
        />
      ) : (
        <div className="w-[400px] h-[400px] px-6 py-10 bg-blue-100 shadow-lg rounded-lg hover:bg-blue-200 flex flex-col gap-2">
          <div className="row-items flex gap-2 h-full">
            <Item
              onClick={() => {
                handleClick(0);
              }}
              text={state[0]}
              disabled={state[0] == ("X" || "0") && true}
            />
            <Item
              onClick={() => {
                handleClick(1);
              }}
              text={state[1]}
              disabled={state[1] == ("X" || "0") && true}
            />
            <Item
              onClick={() => {
                handleClick(2);
              }}
              text={state[2]}
              disabled={state[2] == ("X" || "0") && true}
            />
          </div>
          <div className="row-items flex gap-2 h-full">
            <Item
              onClick={() => {
                handleClick(3);
              }}
              text={state[3]}
              disabled={state[3] == ("X" || "0") && true}
            />
            <Item
              onClick={() => {
                handleClick(4);
              }}
              text={state[4]}
              disabled={state[4] == ("X" || "0") && true}
            />
            <Item
              onClick={() => {
                handleClick(5);
              }}
              text={state[5]}
              disabled={state[5] == ("X" || "0") && true}
            />
          </div>
          <div className="row-items flex gap-2 h-full">
            <Item
              onClick={() => {
                handleClick(6);
              }}
              text={state[6]}
              disabled={state[6] == ("X" || "0") && true}
            />
            <Item
              onClick={() => {
                handleClick(7);
              }}
              text={state[7]}
              disabled={state[7] == ("X" || "0") && true}
            />
            <Item
              onClick={() => {
                handleClick(8);
              }}
              text={state[8]}
              disabled={state[8] == ("X" || "0") && true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
