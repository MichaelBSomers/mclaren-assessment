import React, { createContext, useReducer } from "react";

const initialState = {
  data: [], // raw json data
  progress: 0, //percent
  currentPage: 0,
  currentSection: 0,
  totalPages: 0
};
const infoContext = createContext(initialState);
const { Provider } = infoContext;

export const infoContextActions = {
  UPDATE_DATA: "updateData",
  UPDATE_PROGRESS: "updateProgress",
  UPDATE_CURRENT_PAGE: "updateCurrentPage",
  UPDATE_CURRENT_SECTION: "updateCurrentSection",
  FORM_CHANGE: "formChange"
};

const InfoContextStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case infoContextActions.UPDATE_DATA:
        return {
          ...state,
          data: action.value
        };
      case infoContextActions.UPDATE_PROGRESS:
        return {
          ...state,
          progress: action.value
        };
      case infoContextActions.UPDATE_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.value.page,
          currentSection: action.value.section,
          progress: action.value.progress
        };
      case infoContextActions.UPDATE_CURRENT_SECTION:
        return {
          ...state,
          currentPage: action.value.page,
          currentSection: action.value.section,
          progress: action.value.progress
        };
      case infoContextActions.FORM_CHANGE:
        let newState = { ...state };
        let questionIndex;
        newState.data[state.currentPage].Sections[
          state.currentSection
        ].Questions.map((item, index) => {
          if (item.QuestionID === action.value.QuestionID) {
            questionIndex = index;
          }
        });
        // const questionIndex = state.data[state.currentPage].Sections[
        //   state.currentSection
        // ].Questions.indexOf((item, index) => {
        //   item.QuestionID === action.value.QuestionID;
        // });
        console.log("questionIndex", questionIndex);

        newState.data[state.currentPage].Sections[
          state.currentSection
        ].Questions[questionIndex] = action.value;
        // console.log("newState", newState);
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { infoContext, InfoContextStateProvider };
