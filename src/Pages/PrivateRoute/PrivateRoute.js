import React from "react";
import {Spinner} from "react-bootstrap";
import {Route, Redirect} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./PrivateRoute.css";

const PrivateRoute = ({children, ...rest}) => {
  const {user, isLoading} = useAuth();
  if (isLoading) {
    return (
      <div class="spinner-border text-light spinner " role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({location}) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
