import React, { Component } from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import animalManager from '../../modules/animalManager';
import './animalDetail.css'

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      loadingStatus: true,
      noAnimal: false,
      employeeId: null,
      url: ""
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    animalManager.get(this.props.animalId)
    .then((animal) => {
      if(animal.id === undefined){
        this.setState({
          noAnimal: true
        })
        // alert("No animals")
      } else {
        this.setState({
          name: animal.name,
          breed: animal.breed,
          url: animal.url,
          loadingStatus: false,
          noAnimal: false,
          employeeId: animal.employeeId
        });
        console.log(this.state.caretaker)
      }
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    animalManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
}

  render() {
    console.log(this.state.noAnimal)
    if(this.state.noAnimal === false){
      return (
        <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`../../${this.state.url}`)} alt="My Dog" className="animalImg"/>
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <p>Caretaker: {this.state.caretaker}</p>
            <button className="btn-details" type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }else {
    alert("No Animals")
    return <Redirect to="/animals" />
  }
}
}

export default AnimalDetail;