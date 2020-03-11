import React from "react"
import { Route, Redirect } from "react-router-dom"

const ProtectedRouteStudent = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user === "student") return <Component {...rest} {...props} />
        else
          return (
            <Redirect
              to={{
                pathname: "/Unauthorized",
                state: { from: props.location }
              }}
            />
          )
      }}
    ></Route>
  )
}
export default ProtectedRouteStudent
