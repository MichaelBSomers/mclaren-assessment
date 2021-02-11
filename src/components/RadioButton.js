import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const RadioButton = ({ question }) => {
  if (!question.IsActive) {
    return null;
  }
  console.log("question", question);
  return (
    <FormGroup tag="fieldset">
      <legend>{question.Label}</legend>
      {question.Options.map((item, index) => {
        return (
          <FormGroup check disabled={!item.IsActive} key={index}>
            <Label check>
              <Input
                required={question.IsRequired}
                type="radio"
                name={question.QuestionID}
                disabled={!item.IsActive}
              />
              {item.Description}
            </Label>
          </FormGroup>
        );
      })}
    </FormGroup>
  );
};

export default RadioButton;
