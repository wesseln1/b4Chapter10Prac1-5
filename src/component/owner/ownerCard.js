import React, { Component } from 'react';
import person from "./person.png"

// rendering each card to the dom
export default class OwnerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
              <div>
                <img src={person} alt="My Dog" />
                <h3>Name: <span className="card-petname">{this.props.owner.name}</span></h3>
                <p>Breed: {this.props.owner.breed}</p>
              </div>
          </div>
        </div>
      );
    }
  }