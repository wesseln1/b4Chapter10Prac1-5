import React, { Component } from 'react';
import AnimalManager from '../../modules/animalManager';
import './animalForm.css'
import AnimalCaretaker from './animalCaretaker';
// import animalCaretaker from './animalCaretaker';
import employeeManager from '../../modules/employeeManager';

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        // caretaker: "",
        loadingStatus: false,
        imgUrl: "",
        employees: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
 
    componentDidMount(){
        employeeManager.getAll()
        .then(employees => {
                this.setState({
                  employees: employees,
                });
            })
    }

  
    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            let imgValue = this.state.imgUrl.replace("C:\\fakepath\\", "pictures/")
            console.log(this.state.imgUrl)
            const animal = {
                url: imgValue,
                name: this.state.animalName,
                breed: this.state.breed,
                caretaker: 
            };

            // Create the animal and redirect user to animal list
            AnimalManager.post(animal)
            .then(() => this.props.history.push("/animals"));
        }
    };

    render(){

        return(
            // <React.Fragment>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="animalName">Name:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="animalName"
                        placeholder="Animal name"
                        />
                        <label htmlFor="breed">Breed:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="breed"
                        placeholder="Breed"
                        />
                        <label htmlFor="imgUrl">Upload Image</label>
                        <input type="file" id="imgUrl" onChange={this.handleFieldChange}></input>
                        <select className="animalCaretaker">
                            <option>Caretaker</option>
                            {this.state.employees.map(employee => (
                                <AnimalCaretaker key={employee.id} employee={employee}/>
                            ))
                        }
                        </select>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            // </React.Fragment>
        )
    }
}

export default AnimalForm