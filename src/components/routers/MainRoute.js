import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "../../controllers/SignUp";
import Login from "../../controllers/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../controllers/admin/Dashboard";
import Profile from "../../controllers/admin/Profile";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/admin/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/admin/profile">
          <Profile />
        </PrivateRoute>
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
};

export default connect()(MainRouter);
