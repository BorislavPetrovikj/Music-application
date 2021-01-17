import React, { Component } from "react";
import artists from "../db";
import Browse from "./Browse";

class BrowseArtists extends Component {
  state = {
    artists: artists,
  };

  render() {
    return (
      <div className="BrowseArtists">
        <div className="container">
          {this.state.artists.map((el) => {
            return (
              <Browse id={el.id} covers={el.cover} name={el.name}></Browse>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BrowseArtists;
