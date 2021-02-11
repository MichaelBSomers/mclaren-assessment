import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { infoContext } from "../context/infoContext";

const ProgressBar = () => {
  const infoState = useContext(infoContext);
  return (
    <Row>
      <Col xs={"auto"} className="m-auto">
        <div>Progress: {infoState.state.progress}%</div>
      </Col>
    </Row>
  );
};

export default ProgressBar;
