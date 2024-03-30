import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    setCnt(name.length);
  }, [name]);

  return (
    <>
      <h1>Props and State</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name is: {name}</p>
      <p>count is: {cnt}</p>
    </>
  );
}

export default App;
