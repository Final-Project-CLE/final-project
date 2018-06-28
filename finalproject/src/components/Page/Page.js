import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuizBox from "../QuizBox/QuizBox";
import data from "../../data.json";
import Container from "../Container/Container";
import NavExample from '../Navbar/Navbar';
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
      <div>
        <NavExample />
        <Jumbotron />
        <Container>
          <div className="row">
            {this.state.data.map(item => (
              <QuizBox
                key={item.id}
                id={item.id}
                quizTitle={item.quizTitle}
              />
            ))}
          </div>
        </Container>
        <Quiz 
        quizTitle ={data[0].quizTitle}
        Q1 = {data[0].q1.question}
        />

      </div>
    );
  }
}

export default Page;
