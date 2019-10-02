import React, { Component } from "react";
import place from "./place.png";
import { Link } from "react-router-dom";

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
          <p>Address: {this.props.location.address}</p>
          <button className="btn-delete" type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Closed Down</button>
          <Link to={`/locations/${this.props.location.id}`}><button className="btn-details">Details</button></Link>
        </div>
      </div>
    );
  }
}
export default LocationCard