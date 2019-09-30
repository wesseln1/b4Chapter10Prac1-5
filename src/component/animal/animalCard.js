import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import './Animal.css'

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="animal-card-content">
          <picture>
            <img src={require('./logodog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <b>{this.props.animal.name}</b></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;