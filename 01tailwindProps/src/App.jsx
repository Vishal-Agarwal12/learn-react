import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-300 mb-4 p-5 text-5xl  ">Tailwind</h1>
      <Card username="Vishal" />
      <br />
      <Card username="Ram" />
    </>
  );
}

export default App;
