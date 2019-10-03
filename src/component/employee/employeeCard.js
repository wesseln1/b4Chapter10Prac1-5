import React, { Component } from "react";
import worker from "./worker.png";
import { Link } from "react-router-dom";

// rendering each card to the dom
class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={worker} alt="Employee" />
          </picture>
          <h3>
            Name: <b>{this.props.employee.name}</b>
          </h3>
          <p>Position: {this.props.employee.position}</p>
          <button
            className="btn-delete"
            type="button"
            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
          >
            Fire
          </button>
          <button
          className="btn-details"
            type="button"
            onClick={() => {
              this.props.history.push(
                `/employees/${this.props.employee.id}/details`
              );
            }}
          >
            Details
          </button>
          <Link to={`/employees/${this.props.employee.id}`}>
            <button className="btn-details">Employee</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
