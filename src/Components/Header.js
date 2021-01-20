import React from "react";
import logo from "../logo.jpg";
import "./globalStyle.css";
const Header = (props) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col ">
            <a href="/" className="navbar-brand">
              <img
                style={{
                  width: "103%",
                  display: "block",
                  height: "auto",
                  borderBottom: " 15px solid#00FFFF",
                }}
                className="Logo"
                src={logo}
                alt=""
              ></img>
              <div className="centered">
                <h1
                  style={{
                    fontSize: "3vw",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Music-Db
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
