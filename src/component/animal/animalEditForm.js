import React, { Component } from "react";
import animalManager from "../../modules/animalManager";
import employeeManager from "../../modules/employeeManager";
import "./animalForm.css";

class AnimalEditForm extends Component {
  //set the initial state
  state = {
    animalName: "",
    breed: "",
    loadingStatus: true,
    imgUrl: "",
    employeeId: "",
    employees: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingAnimal = evt => {
    evt.preventDefault();
    let imgValue = this.state.imgUrl.replace("C:\\fakepath\\", "pictures/");
    this.setState({ loadingStatus: true });
    const editedAnimal = {
      id: this.props.match.params.animalId,
      name: this.state.animalName,
      breed: this.state.breed,
      employeeId: parseInt(this.state.employeeId),
      url: imgValue
    };

    animalManager
      .update(editedAnimal)
      .then(() => this.props.history.push("/animals"));
  };

  componentDidMount() {
    employeeManager.getAll().then(allEmployees => {
      animalManager.get(this.props.match.params.animalId).then(animal => {
        this.setState({
          animalName: animal.name,
          breed: animal.breed,
          loadingStatus: false,
          employeeId: parseInt(animal.employeeId),
          imgUrl: animal.url,
          employees: allEmployees
        });
      });
    });
    // animalManager.get(this.props.match.params.animalId).then(animal => {
    //   this.setState({
    //     animalName: animal.name,
    //     breed: animal.breed,
    //     loadingStatus: false,
    //     employeeId: animal.employeeId,
    //     imgUrl: animal.url
    //   });
    // });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
              {/* <label htmlFor="employeeId" id="employeeId">
                Caretaker
              </label>
              <input
                type="text"
                id="employeeId"
                onChange={this.handleFieldChange}
                value={this.state.employeeId}
              >
                {this.state.caretaker}
              </input> */}
              <label htmlFor="employees">Caretaker</label>
              <select
                className="form-select"
                defaultValue="Caretaker"
                id="employeeId"
                // value={this.state.employeeId}
                onChange={this.handleFieldChange}
              >
                {/* <option disabled>Caretaker</option> */}
                {this.state.employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
              <input
                type="file"
                id="imgUrl"
                onChange={this.handleFieldChange}
              ></input>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
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

export default AnimalEditForm;
