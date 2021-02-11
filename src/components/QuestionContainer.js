import React, { useState, useEffect } from "react";
import { Row, Col, Form, FormGroup } from "reactstrap";
import Question from "./Question";
// import "./styles.css";

const QuestionContainer = ({ questions = [], SectionID }) => {
  const [questionFormat, setQuestionFormat] = useState([]);

  // console.log("questions", questions);
  console.log("questions", questions);
  return (
    <FormGroup required>
      {questions.map((item, index) => {
        return <Question question={item} key={index} updateFormInfo={null} />;
      })}
    </FormGroup>
  );
};

export default QuestionContainer;
