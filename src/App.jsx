import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <h1 className="bg-orange-600 text-white text-center py-5 text-4xl font-semibold">
          Tic-Tac-Toe
        </h1>
        <Board />
      </div>
    </>
  );
}

export default App;
