import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const globalState = {
  nilai: 0,
  calc: 0
};

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        nilai: state.nilai + state.calc
      };
    case "SUBS":
      return {
        ...state,
        nilai: state.nilai - state.calc
      };
    case "CALC":
      return {
        ...state,
        calc: action.value
      };
    default:
      return state;
  }
};

const globalStore = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
