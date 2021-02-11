import React from "react";
import { Label } from "reactstrap";

const QuestionLabel = ({ question }) => {
  return <Label>{question.Label}</Label>;
};

export default QuestionLabel;
