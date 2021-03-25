import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ component: Component, ...rest }) {
  const userSignIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignIn;
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo && userInfo.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin"></Redirect>
        )
      }
    ></Route>
  );
}
