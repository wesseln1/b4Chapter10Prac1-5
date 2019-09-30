import React, { Component } from "react";
import place from "./place.png";

// rendering each card to the dom

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={place} alt="location" />
          </picture>
          <h3>Name: <b>{this.props.location.name}</b></h3>
          <p>Address: {this.props.location.position}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}
export default LocationCard