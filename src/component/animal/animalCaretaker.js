import React, { Component } from "react";
// import employeeManager from '../../modules/employeeManager';
// let selectCaretaker = document.querySelector(".animalCaretaker")
export default class AnimalCaretaker extends Component {
    // getCaretakers = () => {
    //     employeeManager.getAll()
    //     .then(employees => {
    //         this.setState({
    //             employees: employees
    //         })
    //     })
    // }
  render() {
      console.log("here at Animal");
        return (
            <option id={this.props.employee.id}>{this.props.employee.name}</option>
        )
  }
}