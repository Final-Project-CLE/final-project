import React, { Component } from "react";

import quizAPI from "../../utils/quizAPI";
import { Link } from "react-router-dom";


class Quiz extends Component {
  state = {
    quizzes: [],
    questions: [],
    title: "",
    author: "",
    id: ""
  };




  render() {
    return (
      <div>
        <p>Single Quiz Page</p>
      </div>
    );

  };
};


export default Quiz;
