import React, { Component } from 'react'
import './kennel.css'
// import AnimalCard from "./animal/animalCard"
// import OwnerCard from "./owner/ownerCard"
// import LocationCard from "./location/locationCard"
// import EmployeeCards from "./employee/employeeCard"
import NavBar from '../nav/nav'
import ApplicationViews from '../applicationViews/applicationViews'

class Kennel extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ApplicationViews /> 
            </div>
        );
    }
}

export default Kennel