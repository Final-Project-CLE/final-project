import React, { Component } from "react";
import quizAPI from "../../utils/quizAPI";
import userAPI from "../../utils/userAPI";
import { Link } from "react-router-dom";



class Login extends Component {
  state = {
    username: "",
    password: ""
  };



  render() {
    return (
      <div>
        <p>Login Page</p>
      </div>
    );
  }
}

export default Login;
