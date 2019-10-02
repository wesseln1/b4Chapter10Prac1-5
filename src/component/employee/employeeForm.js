import React, { Component } from "react";
import employeeManager from "../../modules/employeeManager";
import "./employeeForm.css";

class EmployeeForm extends Component {
  state = {
    employeeName: "",
    breed: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee      object, invoke the employeeManager post method, and redirect to the full employee list
   */
  constructNewemployee = evt => {
    evt.preventDefault();
    if (this.state.employeeName === "" || this.state.breed === "") {
      window.alert("Please input an employee name and breed");
    } else {
      this.setState({ loadingStatus: true });
      const employee = {
        name: this.state.employeeName,
        breed: this.state.breed
      };

      // Create the employee and redirect user to employee list
      employeeManager.post(employee).then(() =>
        this.props.history.push("/employees")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="employeeName">Name:</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="employeeName"
                placeholder="employee name"
              />
              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="breed"
                placeholder="Breed"
              />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewemployee}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeForm;
