import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "reactstrap";
import ProgressButtons from "../components/ProgressButtons";
import QuestionContainer from "../components/QuestionContainer";
import { infoContext, infoContextActions } from "../context/infoContext";

const ResponsivePage = ({ previous, onSubmit }) => {
  const infoState = useContext(infoContext);

  const { currentPage } = infoState.state;
  const { currentSection } = infoState.state;

  console.log(infoState.state.data[currentPage].Sections);
  if (!infoState.state.data) {
    return null;
  }

  return (
    <Container className={"p-2"}>
      <Form onSubmit={onSubmit}>
        <Row className={"justify-content-md-center"}>
          <Col xs={"auto"}>
            <h2>{infoState.state.data[currentPage].Label}</h2>
          </Col>
        </Row>
        <hr />
        <QuestionContainer
          questions={
            infoState.state.data[currentPage].Sections[currentSection] &&
            infoState.state.data[currentPage].Sections[currentSection].Questions
          }
          SectionID={
            infoState.state.data[currentPage].Sections[currentSection] &&
            infoState.state.data[currentPage].Sections[currentSection].SectionID
          }
        />
        {/* TODO: Make Buttons their own component */}
        <ProgressButtons previous={previous} />
      </Form>
    </Container>
  );
};

export default ResponsivePage;
