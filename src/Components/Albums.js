import React from "react";

const Albums = (props) => {
  return (
    <div className="Albums ">
      <img src={`/images/albums/${props.cover}.jpg`} alt="img"></img>
    </div>
  );
};

export default Albums;
