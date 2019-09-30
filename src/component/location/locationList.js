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

  render() {
// rendering card container and calling card function to render ALL cards
    return (
      <div className="container-cards">
        {this.state.locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    );
  }
}

export default LocationList;
