import React from "react";
import "./Header.css";
const Albums = (props) => {
  return (
    <div className="Albums ">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={`/images/albums/${props.albums}.jpg`} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
