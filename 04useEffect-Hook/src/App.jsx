import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => setTime(time + 1), 200);
  }, [time]);

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time is {time}</p>
    </>
  );
}

export default App;
