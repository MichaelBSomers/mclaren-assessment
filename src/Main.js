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
  const { currentPage } = infoState.state;
  const { currentSection } = infoState.state;

  const updateData = (data) => {
    infoState.dispatch({
      type: infoContextActions.UPDATE_DATA,
      value: data
    });
  };

  const submitForm = () => {
    // Send JSON back to server (I usually use axios)
    // const response = axios.post('/submit', infoState.state.data)
    // if(response.error){
    //   error
    // } else {
    //   Completion page
    // }
    // Thank You for looking at my assessment :D
  };

  const onSubmit = (e) => {
    const nextPage = currentPage + 1;
    const nextSection = currentSection + 1;
    e.preventDefault();
    // This shouldn't be needed if I handle buttons correctly, but it's for redundancy.
    if (currentPage < infoState.state.data.length - 1) {
      if (
        currentSection <
        infoState.state.data[infoState.state.currentPage].Sections.length - 1
      ) {
        updateSection({
          section: nextSection,
          page: currentPage,
          progress: updateProgress(currentPage, nextSection)
        });
      } else {
        updatePage({
          page: nextPage,
          section: 0,
          progress: updateProgress(nextPage, 0)
        });
      }
    } else {
      if (checkLastSection()) {
        updateSection({
          section: nextSection,
          page: currentPage,
          progress: updateProgress(currentPage, nextSection)
        });
        setShowConfirmation(true);
      } else {
        // Show Error Page
      }
    }
  };

  const previous = (e) => {
    e.preventDefault();
    const prevPage = currentPage - 1;
    const prevSection = currentSection - 1;

    if (showConfirmation) {
      setShowConfirmation(false);
    }

    if (currentSection === 0 && currentPage > 0) {
      // handle making section max when reducing page by 1
      updateSection({
        section: infoState.state.data[prevPage].Sections.length - 1,
        page: prevPage,
        progress: updateProgress(
          prevPage,
          infoState.state.data[prevPage].Sections.length - 1
        )
      });
    } else {
      updateSection({
        page: currentPage,
        section: prevSection,
        progress: updateProgress(currentPage, prevSection)
      });
    }
  };

  //consolidate updates into a single function

  const checkLastSection = () => {
    if (
      currentPage === infoState.state.data.length - 1 &&
      currentSection ===
        infoState.state.data[infoState.state.currentPage].Sections.length - 1
    ) {
      return true;
    }
    return false;
  };

  const updatePage = (page) => {
    infoState.dispatch({
      type: infoContextActions.UPDATE_CURRENT_PAGE,
      value: page
    });
  };

  const updateSection = (section) => {
    infoState.dispatch({
      type: infoContextActions.UPDATE_CURRENT_SECTION,
      value: section
    });
  };

  const updateProgress = (nextPage, nextSection) => {
    let sectionCount = 0;
    let currentPosition = 0;

    infoState.state.data.map((page) => {
      page.Sections.map((section) => {
        sectionCount++;
      });
    });
    infoState.state.data.map((page, index) => {
      if (index < nextPage) {
        page.Sections.map((section) => {
          currentPosition++;
        });
      } else if (index === nextPage) {
        page.Sections.map((section, index) => {
          if (index < nextSection) {
            currentPosition++;
          }
        });
      }
    });
    return Math.round((currentPosition / sectionCount) * 100);
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
      <Container fluid className="m-auto">
        <div className={"main-container"}>
          <ProgressBar />
          <ConfirmationPage
            showConfirmation={setShowConfirmation}
            onSubmit={submitForm}
            previous={previous}
          />
        </div>
      </Container>
    );
  }

  // Going to skip implementation of ReactRouter for simplicity sake.

  return (
    <Container fluid className="m-auto">
      <div className={"main-container"}>
        <ProgressBar />
        <ResponsivePage
          showConfirmation={setShowConfirmation}
          onSubmit={onSubmit}
          previous={previous}
        />
      </div>
    </Container>
  );
};

export default Home;
