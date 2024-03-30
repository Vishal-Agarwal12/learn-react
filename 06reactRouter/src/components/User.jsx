import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <h1 className="user">User : {userid}</h1>
    </>
  );
};

export default User;
