import React, { Component } from 'react';
import QuizBox from "../QuizBox/QuizBox";
import data from "../../data.json";
import Container from "../Container/Container";
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';

class Page extends Component {
  state = {
    data
  }
  render() {
    return (
      <div>
        <Navbar />
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

      </div>
    );
  }
}

export default Page;
