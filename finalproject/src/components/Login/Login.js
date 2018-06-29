import React, { Component } from 'react';
import "./Login.css"



        const Login=props=>(
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
        )
    

export default Login;