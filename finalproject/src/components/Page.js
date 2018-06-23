import React, { Component } from 'react';
import QuizBox from "./QuizBox";
import data from "../data.json";
import Container from "./Container";
import Quiz from "./Quiz";

class Page extends Component {
  state = {
    data
  }
  render() {
    return (
      <div>
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
