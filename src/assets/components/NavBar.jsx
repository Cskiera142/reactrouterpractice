import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/blue" className="blue">
          Blue
        </Link>
        <Link to="/home" className="home">
          Home
        </Link>
        <Link to="/red" className="red">
          Red
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
