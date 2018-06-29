import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "../../data.json";
import Jumbotron from '../Jumbotron/Jumbotron';
import Quizzes from "../../pages/Quizzes";
import Login from "../../pages/Login";
import NewUser from "../../pages/NewUser";
import Home from "../../pages/Home";
import NewQuiz from "../../pages/NewQuiz"

class Page extends Component {
  state = {
    data
  }
  handleSubmit = () =>{
    alert("You submitted this thingy!")
  }
  render() {
    return (
    <Router>
      <div>
        <Example />
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
