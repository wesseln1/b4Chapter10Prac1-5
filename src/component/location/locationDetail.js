import React, { Component } from 'react';
import locationManager from '../../modules/locationManager';
import place from "./place.png";
import './locationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      breed: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from locationManager and hang on to the data; put it into state
    locationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    locationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={place} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;