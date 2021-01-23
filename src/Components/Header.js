import React from "react";
import logo from "../logo.jpg";
import "./Header.css";
import "./App.css";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col ">
            <a href="/" className="navbar-brand">
              <img src={logo} alt=""></img>
              <div className="centered">
                <h1>Music-Db</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
