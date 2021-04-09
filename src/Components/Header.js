import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div ClassName="logo">
        <Link to="/">This is Practice</Link>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
