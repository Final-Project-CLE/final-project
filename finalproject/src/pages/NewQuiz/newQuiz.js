import React, { Component } from "react";
import quizAPI from "../../utils/quizAPI";
import userAPI from "../../utils/userAPI";
import { Link } from "react-router-dom";


class newUser extends Component {
  state = {
    title: "",
    author: "",
    questions: []
  };


  render() {
    return (

      <div>
        <p>New Quiz Page</p>
      </div>


    );
  }
}

export default newUser;