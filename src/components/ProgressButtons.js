import React, { useContext } from "react";
import { Row, Col, Button } from "reactstrap";
import { infoContext } from "../context/infoContext";

const ProgressButtons = ({ previous, showSubmit }) => {
  const infoState = useContext(infoContext);
  const { currentPage } = infoState.state;
  const { currentSection } = infoState.state;

  return (
    <Row className={"d-flex"}>
      <Col sm={4}>
        {(currentPage > 0 || currentSection > 0) && (
          <Button block onClick={previous} className="buttons">
            {showSubmit ? "Edit" : "< Previous"}
          </Button>
        )}
      </Col>
      <Col sm={{ size: 4, offset: 4 }}>
        <Button block type="submit" className="buttons">
          {showSubmit ? "Submit" : "Next >"}
        </Button>
      </Col>
    </Row>
  );
};

export default ProgressButtons;
