import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Herosection from "./components/Herosection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Herosection />
    </>
  );
}

export default App;
