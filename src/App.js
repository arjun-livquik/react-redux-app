import React from "react";
import { connect } from "react-redux";
import "./App.css";
import MainRoute from "./components/routers/MainRoute";

function App() {
  return <MainRoute />;
}

export default connect()(App);
