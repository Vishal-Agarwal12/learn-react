import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-desktop.jpg" />
        </div>
        <div className="navbar">
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => alert("You are logged in")}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
