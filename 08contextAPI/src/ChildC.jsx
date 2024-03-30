import React from "react";
import { data } from "./App";

const ChildC = ({ name }) => {
  return (
    <>
      <data.Consumer>
        {(dataValue) => {
          return (
            <>
              <h3>My Name is {dataValue.name}</h3>
              <h3>My Gender is {dataValue.gender}</h3>
              <h3>My Age is {dataValue.age}</h3>
            </>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
