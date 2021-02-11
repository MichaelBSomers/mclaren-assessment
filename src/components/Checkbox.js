import React, { useState, useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { infoContext, infoContextActions } from "../context/infoContext";

const CheckBox = ({ question }) => {
  const infoState = useContext(infoContext);

  if (!question.IsActive) {
    return null;
  }

  const change = () => {
    const newQuestion = {
      ...question,
      Answer: !question.Answer
    };
    infoState.dispatch({
      type: infoContextActions.FORM_CHANGE,
      value: newQuestion
    });
  };

  return (
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          required={question.IsRequired}
          name={question.QuestionId}
          checked={question.Answer || question.Checked || false}
          onClick={() => change()}
        />
        {question.Label}
      </Label>
    </FormGroup>
  );
};

export default CheckBox;
