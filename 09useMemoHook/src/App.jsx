import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(() => {
    console.log("*******");
    return 10 * add;
  }, [add]);

  return (
    <>
      <h1>Learning UseMemo Hook</h1>
      {multiply} <br />
      <button onClick={() => setAdd(add + 1)}>Add</button> {add}
      <button onClick={() => setMinus(minus - 1)}>Minus</button> {minus}
    </>
  );
}

export default App;