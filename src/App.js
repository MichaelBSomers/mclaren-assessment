import React from "react";
import Main from "./Main";
import { InfoContextStateProvider } from "./context/infoContext";
import { FormContextStateProvider } from "./context/formContext";

import "./styles.css";

export default function App() {
  return (
    <FormContextStateProvider>
      <InfoContextStateProvider>
        <Main />
      </InfoContextStateProvider>
    </FormContextStateProvider>
  );
}
