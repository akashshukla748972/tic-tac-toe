import React from "react";

const WinnerPopup = (props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="card w-[300px] p-10 bg-blue-50 shadow-lg flex flex-col gap-4 backdrop-sepia-0">
        <h1 className="text-2xl font-semibold text-center">
          Is winner {props.winner}
        </h1>
        <button
          onClick={() => props.onClick()}
          className="bg-orange-600 px-10 text-blue-50 font-semibold py-1 rounded"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinnerPopup;
