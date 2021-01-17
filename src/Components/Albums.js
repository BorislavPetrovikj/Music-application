import React from "react";
const Albums = (props) => {
  return (
    <div className="Albums">
      <p>dadadada</p>
      <img src={`/images/albums/${props.albums}.jpg`}></img>
      <img src={`/images/albums/${props.albums}.jpg`}></img>
      <img src={`/images/albums/${props.albums}.jpg`}></img>
    </div>
  );
};

export default Albums;
