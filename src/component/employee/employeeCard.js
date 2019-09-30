import React, { Component } from "react";
import worker from "./worker.png";

// rendering each card to the dom
export default class EmployeeCards extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture></picture>
          <div key={this.props.employee.name}>
            <img src={worker} alt="My Dog" />
            <h3>
              Name:{" "}
              <span className="card-petname">{this.props.employee.name}</span>
            </h3>
            <p>Posistion: {this.props.employee.posistion}</p>
          </div>
        </div>
      </div>
    );
  }
}
