import React, { Component } from "react";

import quizAPI from "../../utils/quizAPI";
import { Link } from "react-router-dom";




class Home extends Component {
  state = {
    homes: [],

  };





  render() {
    return (
      <div>
        <p>Home Page</p>
      </div>
    );
  }
}

export default Home;