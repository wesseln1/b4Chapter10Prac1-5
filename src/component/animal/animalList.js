import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './animalCard'
import animalManager from '../../modules/animalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    //getAll from AnimalManager and hang on to that data; put it in state
    animalManager.getAll()
    .then((animals) => {
        this.setState({
            animals: animals
        })
    })
}

deleteAnimal = id => {
    animalManager.delete(id)
    .then(() => {
      animalManager.getAll()
      .then((newAnimals) => {
        this.setState({
            animals: newAnimals
        })
      })
    })
  }

  render(){
    console.log("AnimalList: Render");
  
    return(
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
          />
        )}
      </div>
    )
  }
}

export default AnimalList