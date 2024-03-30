import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./ChildA";
import ChildC from "./ChildC";

const data = createContext();
function App() {
  const dataValue = {
    name: "Vishal",
    gender: "Male",
    age: 22,
  };
  return (
    <>
      <h1>Context API</h1>
      <data.Provider value={dataValue}>
        <ChildA />
      </data.Provider>
    </>
  );
}

export default App;
export { data };
