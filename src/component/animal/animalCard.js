import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./animal.css";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="animal-card-content">
          <picture>
            <img src={require(`../../${this.props.animal.url}`)} alt="My Dog" />
          </picture>
          <h3>
            Name: <b>{this.props.animal.name}</b>
          </h3>
          <p>Breed: {this.props.animal.breed}</p>
          <p>Caretaker: {this.props.animal.caretaker}</p>
          <button
            className="btn-delete"
            type="button"
            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
          >
            Discharge
          </button>
          <Link to={`/animals/${this.props.animal.id}`}>
            <button className="btn-details">Details</button>
          </Link>
          <button
          className="btn-details"
            type="button"
            onClick={() => {
              this.props.history.push(`/animals/${this.props.animal.id}/edit`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
