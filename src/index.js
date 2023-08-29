import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./redux/navBarSlice";
import themeReducer from "./redux/themeReducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    darkTheme: themeReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
