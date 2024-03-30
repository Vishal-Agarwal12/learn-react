import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const changeCol = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div>
        <button
          onClick={() => changeCol("red")}
          className="bg-red-500 mx-3 px-3 rounded-lg"
        >
          Red
        </button>
        <button
          onClick={() => changeCol("blue")}
          className="bg-blue-500 px-3 rounded-lg"
        >
          Blue
        </button>
        <button
          onClick={() => changeCol("green")}
          className="bg-green-500 mx-3 px-3 rounded-lg"
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
