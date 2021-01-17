import React from "react";
import artists from "../db";
const ArtistsPage = (props) => {
  const currentEl = artists.find(
    (el) => el.id === parseInt(props.match.params.id)
  );

  return (
    <div className="ArtistsPage">
      <div className="col-md-6 text-center">
        <img src={`/images/covers/${currentEl.cover}.jpg`} alt="img" />
        <p>{currentEl.bio}</p>
       
      </div>
    </div>
  );
};

export default ArtistsPage;
