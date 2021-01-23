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
          <div className="col p-4 text-center">
            <img
              style={{
                width: "35%",
                margin: " auto",
              }}
              src={`/images/covers/${currentEl.cover}.jpg`}
              alt="img"
            />
            <h3 className="font-weight-bold pt-3">{currentEl.name}</h3>
            <p>{currentEl.bio}</p>
            <div className="row px-5 py-4">
              {currentEl.albums.map((Element) => {
                return (
                  <div className="col-md-6 p-1">
                    <Albums cover={Element.cover} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
