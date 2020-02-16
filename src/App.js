import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Login from "./views/Login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./views/Components/Navbar";
import Register from "./views/Login/Register/Register";
import Student from "./views/Users/Student";
import Admin from "./views/Users/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/student"
          name="Student profile page"
          render={props => <Student {...props} />}
        />
        <Route
          path="/admin"
          name="Admin page"
          render={props => <Admin {...props} />}
        />
        <Route
          exact
          path="/login"
          name="Login Page"
          render={props => <Login {...props} />}
        />
        <Route
          exact
          path="/register"
          name=" Registeration Page"
          render={props => <Register {...props} />}
        />

        {/* <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
