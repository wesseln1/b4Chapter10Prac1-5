import React, { Component } from "react";
// import employeeManager from '../../modules/employeeManager';
// let selectCaretaker = document.querySelector(".animalCaretaker")
export default class AnimalCaretaker extends Component {
  render() {
      console.log("here at Animal");
        return (
            <option value={this.props.employee.id}>{this.props.employee.name}</option>
        )
  }
}