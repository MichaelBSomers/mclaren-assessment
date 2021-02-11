import React, { useState, useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { infoContext, infoContextActions } from "../context/infoContext";

const ProgressButtons = ({ question, disable }) => {
  const infoState = useContext(infoContext);

  if (!question.IsActive) {
    return null;
  }

  const change = () => {
    console.log("Question", question);
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
          disabled={disable}
          type="checkbox"
          required={question.IsRequired}
          name={question.QuestionId}
          checked={question.Answer || false}
          defaultChecked={question.Checked}
          onClick={() => change()}
        />
        {question.Label}
      </Label>
    </FormGroup>
  );
};

export default ProgressButtons;
