import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Middle from "./components/Middle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Middle />
    </>
  );
}

export default App;
