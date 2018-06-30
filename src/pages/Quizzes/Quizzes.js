import React, { Component } from 'react';
import QuizBox from "../../components/QuizBox/QuizBox";
import data from "../../data.json";
import Container from "../../components/Container/Container";


class Quizzes extends Component {
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

      </div>
    );
  }
}

export default Quizzes;