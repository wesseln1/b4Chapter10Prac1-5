import React, { Component } from "react";
import worker from "./worker.png";

// rendering each card to the dom
class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={worker} alt="Employee" />
          </picture>
          <h3>Name: <b>{this.props.employee.name}</b></h3>
          <p>Position: {this.props.employee.position}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard