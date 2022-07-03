import React from "react";
import githubIcon from "../utils/imgs/github.png";
const Navbar = () => {
  return (
    <div className="navbar-height">
      <div className="background"></div>
      <nav className="navbar bg-light">
        <div className="container">
          <div className="navbar-brand navbar-width">
            <img src={githubIcon} alt="githubicon" className="img-width" />
            <h1 className="d-inline navbar-brand">Github Finder</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
