import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "../home/home";
import AnimalList from "../animal/animalList";
//only include these once they are built - previous practice exercise
import LocationList from "../location/locationList";
import EmployeeList from "../employee/employeeList";
import OwnerList from "../owner/ownerList";
import AnimalDetail from "../animal/animalDetail";
import EmployeeDetail from "../employee/employeeDetail";
import LocationDetail from "../location/locationDetail";
import AnimalForm from "../animal/animalForm";
import Login from "../auth/login";
import AnimalEditForm from "../animal/animalEditForm";
import EmployeeWithAnimals from "../employee/employeeWithAnimals"

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  isRemembered = () => localStorage.getItem("credentials") !== null;
  //returns true/false
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            // if (this.isAuthenticated() || this.isRemembered()) {
              return <Home />;
            // } else {
            //   return <Redirect to="/login" />;
            // }
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated() || this.isRemembered()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            console.log(props);
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return <AnimalEditForm {...props} />;
          }}
        />
        <Route
          path="/owners"
          render={props => {
            if (this.isAuthenticated() || this.isRemembered()) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/locations"
          render={props => {
              return <LocationList {...props} />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated() || this.isRemembered()) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)} {...props}
              />
            );
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)/details"
          render={props => {
            return <EmployeeWithAnimals {...props} />;
          }}
        />
        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
