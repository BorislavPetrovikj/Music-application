import React, { Component } from "react";
import artists from "../db";
import Browse from "./Browse";
import "./Header.css";
class BrowseArtists extends Component {
  state = {
    artists: artists,
  };

  render() {
    return (
      <div className="BrowseArtists Header">
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.artists.map((el) => {
                return (
                  <Browse
                    id={el.id}
                    covers={el.cover}
                    name={el.name}
                    albums={el.albums[0].cover}
                  ></Browse>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowseArtists;
