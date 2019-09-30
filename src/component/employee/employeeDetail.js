import React, { Component } from 'react';
import employeeManager from '../../modules/employeeManager';
import worker from "./worker.png";
import './employeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      breed: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from employeeManager and hang on to the data; put it into state
    employeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        breed: employee.breed
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={worker} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;