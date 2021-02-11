import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Row, Col } from "reactstrap";
import QuestionContainer from "../components/QuestionContainer";
import { infoContext, infoContextActions } from "../context/infoContext";

const ResponsivePage = () => {
  const infoState = useContext(infoContext);
  const [formInfo, setFormInfo] = useState([]);

  const { currentPage } = infoState.state;
  const { currentSection } = infoState.state;

  const previous = (e) => {
    e.preventDefault();
    const prevPage = currentPage - 1;
    const prevSection = currentSection - 1;

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

  const onSubmit = (e) => {
    const nextPage = currentPage + 1;
    const nextSection = currentSection + 1;
    e.preventDefault();
    console.log("updateProgress()", updateProgress());
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
      if (checkCompletion()) {
        // pass completion.
        // Submit Form
      } else {
        // Show Error Page
      }
    }
    // TODO Implement Submission and completion page transition.
    // TODO Finish function to check if all pages / sections have been complete
  };

  //consolidate updates into a single function

  const checkCompletion = () => {
    console.log("checking completion");
    return false;
  };

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

    infoState.state.data.map((page, index) => {
      page.Sections.map((section, index) => {
        sectionCount++;
      });
    });
    infoState.state.data.map((page, index) => {
      if (index < nextPage) {
        page.Sections.map((section, index) => {
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

  useEffect(() => {
    console.log("data", infoState.state.data);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <h1>{infoState.state.data[currentPage].Label}</h1>
      <QuestionContainer
        questions={
          infoState.state.data[currentPage].Sections[currentSection].Questions
        }
        SectionID={
          infoState.state.data[currentPage].Sections[currentSection].SectionID
        }
      />
      <Row>
        <Col xs={4}>
          {(currentPage > 0 || currentSection > 0) && (
            <Button block onClick={previous}>
              {" "}
              &#60; Previous
            </Button>
          )}
        </Col>
        <Col xs={4} />
        <Col xs={4}>
          <Button block type="submit">
            {checkLastSection() ? "Submit" : "Next >"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ResponsivePage;
