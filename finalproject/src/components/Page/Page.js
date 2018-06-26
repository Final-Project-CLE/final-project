import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuizBox from "../QuizBox/QuizBox";
import data from "../../data.json";
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NewUser from "../../pages/NewUser";
import SingleQuiz from "../../pages/Quiz";
import Quiz from "../Quiz/Quiz"

class Page extends Component {
  state = {
    data
  }
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/quiz" component={Quizzes} />
            <Route path="/quiz/:id" component={SingleQuiz} />
          </Switch>
     </div>
    </Router>
    );
  }
}

export default Page;
