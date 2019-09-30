//import the components we will need
import React, { Component } from "react";
import EmployeeCard from "./employeeCard";
import employeeManager from "../../modules/employeeManager";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };

  componentDidMount() {
  //getAll from EmployeeManager and hang on to that data; put it in state
    employeeManager.getAll().then(employees => {
      this.setState({
        employees: employees
      });
    });
  }

  deleteEmployee = id => {
  // calling the database to delete card then render the new data to dom
    employeeManager.delete(id)
    .then(() => {
      employeeManager.getAll()
      .then((employees) => {
        this.setState({
          employees: employees
        })
      })
    })
  }

  render(){
  // mapping over the array and rendering all cards to dom
    return(
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={this.deleteEmployee}
          />
        )}
      </div>
    )
  }
}

export default EmployeeList;
