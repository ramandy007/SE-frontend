import React, { useState } from "react"
import "./App.scss"
import Login from "./views/Login/login"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./views/Components/Navbar"
import NavbarAdmin from "./views/Components/NavbarAdmin"
import NavbarStudent from "./views/Components/NavbarStudent"
import Register from "./views/Login/Register/Register"
import Student from "./views/Users/Student"
import Admin from "./views/Users/Admin"
import Unauthorized from "./views/Users/Unauthorized"
import ProtectedRoute from "./views/Components/ProtectedRoutes"
import ProtectedRouteStudent from "./views/Components/ProtectedRouteStudent"

function App() {
  const [perm, setPerm] = useState(false)
  const [name, setName] = useState(null)
  const handleLogout = () => {
    localStorage.clear()
  }
  const navbar = () => {
    if (perm === "admin") return <NavbarAdmin />
    else if (perm === "student") return <NavbarStudent />
    else return <Navbar />
  }
  return (
    <BrowserRouter>
      {navbar()}
      <Switch>
        {/* <Route
          exact
          path="/student"
          name="Student profile page"
          render={props => <Student {...props} />}
        /> */}
        <ProtectedRouteStudent
          exact
          path="/student"
          name=" Student Profile Page"
          component={Student}
          handleLogout={handleLogout}
          user={localStorage.getItem("uid")}
        ></ProtectedRouteStudent>
        {/* <Route
          path="/admin"
          name="Admin page"
          render={props => <Admin {...props} />}
        /> */}
        <ProtectedRoute
          exact
          path="/admin"
          name=" Admin Page"
          component={Admin}
          handleLogout={handleLogout}
          user={localStorage.getItem("uid")}
        ></ProtectedRoute>
        <Route
          exact
          path="/login"
          name="Login Page"
          setperm={setPerm}
          setname={setName}
          render={props => (
            <Login {...props} setperm={setPerm} setname={setName} />
          )}
        />
        {/* <Route
          exact
          path="/register"
          name=" Registeration Page"
          render={props => <Register {...props} />}
        /> */}
        <ProtectedRoute
          exact
          path="/register"
          name=" Registeration Page"
          component={Register}
          handleLogout={handleLogout}
          user={localStorage.getItem("uid")}
        ></ProtectedRoute>
        {console.log(localStorage.getItem("uid"))}
        <Route exact path="/Unauthorized" component={Unauthorized} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
