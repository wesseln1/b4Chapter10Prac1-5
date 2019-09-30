import React, { Component } from 'react';
import person from "./person.png"

// rendering each card to the dom
export default class OwnerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
                <img src={person} alt="My Dog" />
            </picture>
              <div>
                <h3>Name: <span className="card-petname">{this.props.owner.name}</span></h3>
                <p>Breed: {this.props.owner.breed}</p>
                <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Discharge</button>
              </div>
          </div>
        </div>
      );
    }
  }