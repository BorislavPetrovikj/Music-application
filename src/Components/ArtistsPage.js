import React from "react";
import artists from "../db";
import Albums from "./Albums";
import "./globalStyle.css";
const ArtistsPage = (props) => {
  const currentEl = artists.find(
    (el) => el.id === parseInt(props.match.params.id)
  );

  return (
    <div className="ArtistsPage Header">
      <div className="container">
        <div className="row">
          <div className="col ">
            <img
              style={{
                width: "35%",
                margin: " auto",
              }}
              src={`/images/covers/${currentEl.cover}.jpg`}
              alt="img"
            />
            <p>{currentEl.bio}</p>
            <Albums
              albums={currentEl.albums[0].cover}
              albums1={currentEl.albums[1].cover}
              albums2={currentEl.albums[2].cover}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
