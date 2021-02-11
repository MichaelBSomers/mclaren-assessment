import React from "react";
import { FormGroup, Label } from "reactstrap";

const QuestionLabel = ({ question }) => {
  return <legend>{question.Label}</legend>;
};

export default QuestionLabel;
