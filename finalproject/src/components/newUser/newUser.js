import React from "react";
import "./newUser.css";
const newUser=props=>(
    <div className="form-inline">
    <h2>sign up </h2>
    <div className="form-group">
        <input className="form-control"
        value={this.state.username}
        name="firstName"
        onChange={this.handleInputChange}
        type="text"

        placeholder="First Name"
        />
        </div>
        <div className="form-group">
        <input className="form-control"
        value={this.state.username}
        name="lastName"
        onChange={this.handleInputChange}
        type="text"

        placeholder="Last Name"
        />
        </div>
    
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
        submit
        </button>
        </div>
    
);
export default newUser;

