import React, { useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { infoContext, infoContextActions } from "../context/infoContext";

const TextBox = ({ question, disable }) => {
  const infoState = useContext(infoContext);
  if (!question.IsActive) {
    return null;
  }

  const change = (value) => {
    const newQuestion = {
      ...question,
      Answer: value
    };
    infoState.dispatch({
      type: infoContextActions.FORM_CHANGE,
      value: newQuestion
    });
  };

  return (
    <FormGroup>
      <Label for={question.QuestionId}>{question.Label}</Label>
      <Input
        disabled={disable}
        type={question.Type}
        required={question.IsRequired}
        name={question.QuestionId}
        placeholder={question.Placeholder}
        onChange={(e) => change(e.target.value)}
        value={question.Answer}
      />
    </FormGroup>
  );
};

export default TextBox;
