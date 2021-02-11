import React, { useContext } from "react";
import { Row, Col, Container, FormGroup } from "reactstrap";
import ProgressButtons from "../components/ProgressButtons";
import { infoContext } from "../context/infoContext";
import Question from "../components/Question";

const ConfirmationPage = ({ previous }) => {
  const infoState = useContext(infoContext);
  console.log(infoState.state.data);
  return (
    <Container className={"p-2"}>
      <Row>
        <Col className={"m-auto"}>
          <h2>Please Confirm Your Responses</h2>
        </Col>
      </Row>
      <hr />
      <FormGroup>
        {infoState.state.data.map((page) => {
          return page.Sections.map((section) => {
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
      </FormGroup>
      <ProgressButtons previous={previous} showSubmit={true} />
    </Container>
  );
};

export default ConfirmationPage;
