//import the components we will need
import React, { Component } from "react";
import LocationCard from "./locationCard";
import locationManager from "../../modules/locationManager";

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: []
  };

  componentDidMount() {
    //getAll from LocationManager and hang on to that data; put it in state
    locationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  deleteLocation = id => {
  // calling the database to delete card then render the new data to dom
    locationManager.delete(id)
    .then(() => {
      locationManager.getAll()
      .then((locations) => {
        this.setState({
          locations: locations
        })
      })
    })
  }

  render(){
  // mapping over the array and rendering all cards to dom
    return(
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard
            key={location.id}
            location={location}
            deleteLocation={this.deleteLocation}
          />
        )}
      </div>
    )
  }
}

export default LocationList;
