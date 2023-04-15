import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import "./index.css";

const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

