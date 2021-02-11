import React from "react";
import QuestionLabel from "./QuestionLabel";
import CheckBox from "./Checkbox";
import TextBox from "./TextBox";
import RadioButton from "./RadioButton";

const UI_IDS = {
  label: "lb",
  checkBox: "cb",
  textBox: "tb",
  inlineRadioButton: "rbil"
};

const Question = ({ question, updateFormInfo, disable = false }) => {
  if (question.UI === UI_IDS.label) {
    return <QuestionLabel question={question} />;
  }
  if (question.UI === UI_IDS.checkBox) {
    return (
      <CheckBox
        question={question}
        updateFormInfo={updateFormInfo}
        disable={disable}
      />
    );
  }
  if (question.UI === UI_IDS.textBox) {
    return (
      <TextBox
        question={question}
        updateFormInfo={updateFormInfo}
        disable={disable}
      />
    );
  }
  if (question.UI === UI_IDS.inlineRadioButton) {
    return (
      <RadioButton
        question={question}
        updateFormInfo={updateFormInfo}
        disable={disable}
      />
    );
  }
  return null;
};

export default Question;
