import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "reactstrap";
import QuestionContainer from "../components/QuestionContainer";
import { infoContext, infoContextActions } from "../context/infoContext";
import Question from "../components/Question";

const ConfirmationPage = () => {
  const infoState = useContext(infoContext);
  console.log(infoState.state.data);
  return (
    <Container>
      {infoState.state.data.map((page, index) => {
        return page.Sections.map((section, Index) => {
          return section.Questions.map((question, index) => {
            return (
              <Question
                question={question}
                key={index}
                updateFormInfo={null}
                disable={true}
              />
            );
          });
        });
      })}
    </Container>
  );
};

export default ConfirmationPage;
