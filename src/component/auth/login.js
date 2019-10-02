import React, { Component } from "react"
import { Route, withRouter, Redirect } from "react-router-dom";

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  rememberMe = () => {
    let box = document.querySelector(".remember")
    if(box.checked === true){
      let confirm = window.confirm("Are you sure?")
      if(confirm ===  true){
        localStorage.setItem(
          "credentials",
          JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          })
          )
        }
      }
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    sessionStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />     
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>

                <label htmlFor="rememberMe">Remember Me</label>
                <input type="checkbox" className="remember" ></input>
            </div>
            <button type="submit" onClick={this.rememberMe}>
                Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login