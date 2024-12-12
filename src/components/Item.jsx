import React from "react";

const Item = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={() => props.onClick()}
      className="w-full h-full bg-blue-50 shadow-md relative"
    >
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {props.text}
      </h1>
    </button>
  );
};

export default Item;
