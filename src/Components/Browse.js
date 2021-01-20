import React from "react";
import "./globalStyle.css";
import { Link } from "react-router-dom";
const Browse = (props) => {
  return (
    <div className="Browse Header">
      <Link to={`/Details/${props.id}`}>
        <img src={`/images/covers/${props.covers}.jpg`} alt="img" />
        <span>{props.name}</span>
        {/* <figcaption>{props.name}</figcaption> */}
      </Link>
    </div>
  );
};

export default Browse;
