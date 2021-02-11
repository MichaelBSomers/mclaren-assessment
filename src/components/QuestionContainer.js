import React from "react";
import { Row, Col, Form, FormGroup } from "reactstrap";
import Question from "./Question";
// import "./styles.css";

const QuestionContainer = ({ questions = [], updateFormInfo }) => {
  console.log("questions", questions);
  return (
    <FormGroup required>
      {questions.map((item, index) => {
        return (
          <Question
            question={item}
            key={index}
            updateFormInfo={updateFormInfo}
          />
        );
      })}
    </FormGroup>
  );
};

export default QuestionContainer;
