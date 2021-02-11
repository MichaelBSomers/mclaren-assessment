import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const CheckBox = ({ question }) => {
  if (!question.IsActive) {
    return null;
  }
  return (
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          required={question.IsRequired}
          name={question.QuestionId}
        />
        {question.Label}
      </Label>
    </FormGroup>
  );
};

export default CheckBox;
