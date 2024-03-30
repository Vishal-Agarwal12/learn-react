import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Chats (${count})`;
  }, [count]);

  return (
    <>
      <h1>Tum Pagal Ho {count} baar</h1>
      <button className="btn" onMouseOver={() => setCount(count + 1)}>
        Click
      </button>
    </>
  );
}

export default App;
