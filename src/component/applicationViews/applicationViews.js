import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "../home/home";
import AnimalList from "../animal/animalList";
//only include these once they are built - previous practice exercise
import LocationList from "../location/locationList";
import EmployeeList from "../employee/employeeList";
import OwnerList from "../owner/ownerList";
import AnimalDetail from "../animal/animalDetail";
import EmployeeDetail from "../employee/employeeDetail";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
            );
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return <OwnerList />;
          }}
        />
        <Route
          path="/locations"
          render={props => {
            return <LocationList />;
          }}
        />
        <Route
          exact path="/employees"
          render={props => {
            return <EmployeeList />;
          }}
        />
         <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
