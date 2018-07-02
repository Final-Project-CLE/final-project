import React, { Component } from "react";
import quizAPI from "../../utils/quizAPI";
import userAPI from "../../utils/userAPI";
import { Link } from "react-router-dom";


class newUser extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };
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
  
userAPI.saveUser({
username:this.state.username,
email:this.state.email,

password:this.state.password

})
.catch(err => console.log(err))}

  render() {
    return (

      <div className="form-group">
          <div className="form-group">
          <input className="form-control"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
          type="text"
  
          placeholder="username"
          />
          </div>
      
          <div className="form-group">
          <input className="form-control"
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
  
          placeholder="email"
          />
          </div>
          <div className="form-group">
          <input className="form-control"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          type="text"
  
          placeholder="password"/>
          </div>
          <div className="form-group">
          <button className="btn btn-primary"
          onClick={this.handleFormSubmit}
          type="button">
          submit
          </button>
          </div>
          </div>


    )
  }
}

export default newUser;
