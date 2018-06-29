import React from "react";
import { Router, Link, Route } from "react-router-dom";
import QuizPage from "../../pages/QuizPage"
const style = {
  margin: "10px"
}

const QuizBox = props => (

  <div className="card col-4-md" style={style}>
    <div className="card-body">
      <Link to={"/" + props.id} >
        {props.quizTitle}
      </Link>
    </div>
  </div>





)

export default QuizBox;