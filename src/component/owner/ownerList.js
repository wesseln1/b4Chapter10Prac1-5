//import the components we will need
import React, { Component } from "react";
import OwnerCard from "./ownerCard";
import ownerManager from "../../modules/ownerManager";

class OwnerList extends Component {
    // define what this component needs ti render
    state= {
        owners: []
    };

    componentDidMount() {
    // getAll from ownerManager and hang on to the date; put it in state
        ownerManager.getAll().then(owners => {
            this.setState({
                owners: owners
            });
        });
    }
    
    deleteOwner = id => {
        ownerManager.delete(id)
        .then(() => {
            ownerManager.getAll()
            .then((owners) => {
                this.setState({
                    owners: owners
                })
            })
        })
    }
    
    render(){
        console.log("OwnerList: Render");
        return(
          <div className="container-cards">
            {this.state.owners.map(owner =>
              <OwnerCard
                key={owner.id}
                owner={owner}
                deleteOwner={this.deleteOwner}
              />
            )}
          </div>
        )
      }
}

export default OwnerList;