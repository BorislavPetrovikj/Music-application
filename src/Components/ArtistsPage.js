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


<div className="ArtistsPage text-center bgGray">
            <img key={currentEl.cover} src={require(`../../images/covers/${currentEl.cover}.jpg`).default} alt="img" className="w-25 py-4" />
            <h2 className="nameArtistsPage pb-3" key={currentEl.name}>{currentEl.name}</h2>
            <p className="mb-0" key={currentEl.bio}>{currentEl.bio}</p>
            <div className="row px-5 py-4">
                {currentEl.albums.map(elem => {
                    return (
                        <div className="col-md-6 p-0" >
                            <Albums cover={elem.cover} />
                        </div>
