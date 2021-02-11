import React, { createContext, useReducer } from "react";

const initialState = {
  submitted: [
    {
      QuestionID: 123,
      Answer: ["MichaelBSomers@gmail.com"]
    }
  ]
};

// [
//   {
//     QuestionID: 123,
//     Answer:
//     [
//       String
//     ]
//   },
// ]
const formContext = createContext(initialState);
const { Provider } = formContext;

export const formContextActions = {
  ADD_SUBMISSION: "addSubmission",
  UPDATE_SUBMITTED: "updateSubmitted"
};

// Use Question ID
// If TextBox Provide Answer String to QuestionID
// If Selection, Provide QuestionOptionID to QuestionID in form of
// {
//    QuestionID: 123,
//    Answer:
//    [
//       QuestionOptionID1,
//       QuestionOptionID2
//    ]
// }

// On Update. Find object in Array based on QuestionID. Replace Answer.

const FormContextStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // case formContextActions.ADD_SUBMISSION:
      //   return state.push(action.value);
      case formContextActions.ADD_SUBMISSION:
        let newState = { ...state };
        const itemIndex = state.indexOf((item) => {
          return item.QuestionID === action.value.QuestionID;
        });
        if (!itemIndex) {
          return state.push(action.value);
        } else {
          newState[itemIndex] = action.value;
          return newState;
        }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { formContext, FormContextStateProvider };
