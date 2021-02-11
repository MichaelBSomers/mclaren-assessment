import React, { useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { infoContext, infoContextActions } from "../context/infoContext";

const RadioButton = ({ question }) => {
  const infoState = useContext(infoContext);
  if (!question.IsActive) {
    return null;
  }

  const change = (item, index) => {
    let newOption = { ...item };
    let newQuestion = { ...question };
    newQuestion.Options.map((item, index) => {
      item.Answer = false;
    });
    newOption.Answer = true;
    newQuestion.Options[index] = newOption;
    infoState.dispatch({
      type: infoContextActions.FORM_CHANGE,
      value: newQuestion
    });
  };

  console.log("question", question);
  return (
    <FormGroup tag="fieldset">
      <Label>{question.Label}</Label>
      {question.Options.map((item, index) => {
        return (
          <FormGroup check disabled={!item.IsActive} key={index}>
            <Label check>
              <Input
                required={question.IsRequired}
                type="radio"
                name={question.QuestionID}
                disabled={!item.IsActive}
                onChange={() => change(item, index)}
                defaultChecked={item.Answer}
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
