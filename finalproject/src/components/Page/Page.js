import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuizBox from "../QuizBox/QuizBox";
import data from "../../data.json";
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Quizzes from "../../pages/Quizzes";
import Login from "../../pages/Login";
import NewUser from "../../pages/NewUser";
import SingleQuiz from "../../pages/Quiz";
import Quiz from "../Quiz/Quiz";
import Home from "../../pages/Home";

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
            <Route exact path="/quizzes" component={Quizzes} />
            <Route exact path="/newquiz" component={NewQuiz} />

          </Switch>
     </div>
    </Router>
    );
  }
}

export default Page;
