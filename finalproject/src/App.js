import React, { Component } from 'react';
import Home from "./pages/Home";
import QuizBox from './components/QuizBox/QuizBox';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import QuizPage from './pages/QuizPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={QuizPage} />
          {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;