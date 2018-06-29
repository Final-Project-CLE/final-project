import React, { Component } from 'react';
import QuizBox from "../QuizBox/QuizBox";
import data from "../../data.json";
import Container from "../Container/Container";
import Example from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Quiz from "../Quiz/Quiz"

class Page extends Component {
  state = {
    data
  }
  handleSubmit = () =>{
    alert("You submitted this thingy!")
  }
  render() {
    return (
      <div>
        <Example />
        <Jumbotron />
        <Container>
          {/* <div className="row">
            {this.state.data.map(item => (
              <QuizBox
                key={item.id}
                id={item.id}
                quizTitle={item.quizTitle}
              />
            ))}
          </div> */}
        </Container>
        <Quiz 
        quizTitle ={data[0].quizTitle}
        Q1 = {data[0].q1.question}
        correctQ1A1 = {data[0].q1.answers.answer1.correct}
        Q1A1 = {data[0].q1.answers.answer1.answer}
        correctQ1A2 = {data[0].q1.answers.answer2.correct}
        Q1A2 = {data[0].q1.answers.answer2.answer}
        correctQ1A3 = {data[0].q1.answers.answer3.correct}
        Q1A3 = {data[0].q1.answers.answer3.answer}
        correctQ1A4 = {data[0].q1.answers.answer4.correct}
        Q1A4 = {data[0].q1.answers.answer4.answer}
        correctQ2A1 = {data[0].q2.answers.answer1.correct}
        Q2A1 = {data[0].q2.answers.answer1.answer}
        correctQ2A2 = {data[0].q2.answers.answer2.correct}
        Q2A2 = {data[0].q2.answers.answer2.answer}
        correctQ2A3 = {data[0].q2.answers.answer3.correct}
        Q2A3 = {data[0].q1.answers.answer3.answer}
        correctQ2A4 = {data[0].q2.answers.answer4.correct}
        Q2A4 = {data[0].q2.answers.answer4.answer}
        correctQ3A1 = {data[0].q3.answers.answer1.correct}
        Q3A1 = {data[0].q3.answers.answer1.answer}
        correctQ3A2 = {data[0].q3.answers.answer2.correct}
        Q3A2 = {data[0].q3.answers.answer2.answer}
        correctQ3A3 = {data[0].q3.answers.answer3.correct}
        Q3A3 = {data[0].q3.answers.answer3.answer}
        correctQ3A4 = {data[0].q3.answers.answer4.correct}
        Q3A4 = {data[0].q3.answers.answer4.answer}
        handleSubmit = {this.handleSubmit}
        />

      </div>
    );
  }
}

export default Page;
