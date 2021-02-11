import React from "react";
import { FormGroup } from "reactstrap";
import Question from "./Question";
import "../styles.css";

const QuestionContainer = ({ questions = [] }) => {
  console.log("questions", questions);
  return (
    <FormGroup
      required
      className={"border border-dark p-2 formGroup-container"}
    >
      {questions.map((item, index) => {
        return <Question question={item} key={index} updateFormInfo={null} />;
      })}
    </FormGroup>
  );
};

export default QuestionContainer;
