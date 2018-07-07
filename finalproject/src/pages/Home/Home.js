import React, { Component } from "react";
import NavExample from '../../components/Navbar/Navbar'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

import quizAPI from "../../utils/quizAPI";
import { Link } from "react-router-dom";




class Home extends Component {
  state = {
    homes: [],

  };





  render() {
    return (
      <div>
        {/* Right now I have it making you login to view the home page  */}
        <NavExample />
        <Jumbotron />
        <p>Home Page</p>
      </div>
    );
  }
}

export default Home;