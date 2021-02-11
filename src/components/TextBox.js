import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const TextBox = ({ question }) => {
  if (!question.IsActive) {
    return null;
  }
  return (
    <FormGroup>
      <Label for={question.QuestionId}>{question.Label}</Label>
      <Input
        type={question.Type}
        required={question.IsRequired}
        name={question.QuestionId}
      />
    </FormGroup>
  );
};

export default TextBox;
