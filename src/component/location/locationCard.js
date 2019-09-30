import React, { Component } from "react";
import place from "./place.png";

// rendering each card to the dom
export default class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture></picture>
          <div>
            <img src={place} alt="My Dog" className="buissnessPic" />
            <h3>
              Name:{" "}
              <span className="card-petname">{this.props.location.name}</span>
            </h3>
            <p>Adress: {this.props.location.address}</p>
          </div>
        </div>
      </div>
    );
  }
}
