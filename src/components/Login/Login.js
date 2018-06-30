import React, { Component } from 'react';
import "./Login.css"

class Login extends {
    state = {
        data
  username="",
 password="",

  }
  
   //handle any changes to the input field
   handleInputChange=event=>{
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const{name, value}=event.target;
    // Set the state for the appropriate input field
    this.setState({
        [name]:value
    });
};
handleFormSubmit=event=>{
    event.preventDefault();
    if(this.state.username && this.state.password){
userAPI.getUser({
  username:this.state.username,
  
  password:this.state.password

})
.catch(err => console.log(err))
        render(){
        return(
            <div className="form-inline">
            <h2>Log in </h2>
            
                <div className="form-group">
                <input className="form-control"
                value={this.state.username}
                name="username"
                onChange={this.handleInputChange}
                type="text"

                placeholder="Username"
                />
                </div>
                <div className="form-group">
                <input className="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="text"

                placeholder="password"/>
                </div>
                <button className="btn btn-primary"
                onClick={this.handleFormSubmit}
                type="button">
                Submit
                </button>
                
                </div>
        )}
    }

export default Login;