import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "../home/home";
import AnimalList from "../animal/animalList";
//only include these once they are built - previous practice exercise
import LocationList from "../location/locationList";
import EmployeeList from "../employee/employeeList";
import OwnerList from "../owner/ownerList";

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
        <Route
          path="/animals"
          render={props => {
            return <AnimalList />;
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
          path="/employees"
          render={props => {
            return <EmployeeList />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
