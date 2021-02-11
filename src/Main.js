import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import ResponsivePage from "./pages/ResponsivePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import { infoContext, infoContextActions } from "./context/infoContext";
import { Row, Col, Container } from "reactstrap";

import "./styles.css";

const Home = () => {
  const infoState = useContext(infoContext);
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const complete = false;

  const updateData = (data) => {
    infoState.dispatch({
      type: infoContextActions.UPDATE_DATA,
      value: data
    });
  };

  const updateProgress = (amount) => {
    infoState.dispatch({
      type: infoContextActions.UPDATE_PROGRESS,
      value: amount
    });
  };

  const getData = async () => {
    await fetch("data/form.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        updateData(myJson);
      });
    setLoading(false);
  };

  useEffect(() => {
    getData();
    updateProgress(0);
  }, []);

  console.log("showConfirmation", showConfirmation);

  if (loading) {
    return <div>Loading</div>;
  }

  if (showConfirmation) {
    return (
      <Container>
        <ProgressBar />
        <ConfirmationPage />
      </Container>
    );
  }

  // Probably going to skip implementation of ReactRouter for simplicity sake
  // as the completion page is my own addition as it doesn't make sense with
  // the progress bar and now having one.

  return (
    <Container>
      <ProgressBar />
      <ResponsivePage showConfirmation={setShowConfirmation} />
    </Container>
  );
};

export default Home;
