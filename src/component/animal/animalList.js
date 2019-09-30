import React, { Component } from "react";
//import the components we will need
import AnimalCard from "./animalCard";
import animalManager from "../../modules/animalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: []
  };

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    animalManager.getAll().then(animals => {
      this.setState({
        animals: animals
      });
    });
  }

  deleteAnimal = id => {
    // calling the database to delete card then render the new data to dom
    animalManager.delete(id).then(() => {
      animalManager.getAll().then(newAnimals => {
        this.setState({
          animals: newAnimals
        });
      });
    });
  };

  render() {
    // mapping over the array and rendering all cards to dom
    return (
      <React.Fragment>
        <section className="section-content">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.history.push("/animals/new");
            }}
          >
            Admit Animal
          </button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AnimalList;
