import jwt_decode from "jwt-decode";
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isFunction } from "util";
import PageLayout from "../components/layout/PageLayout";
import { LOGIN } from "../constants/rotas";

const PrivateRoute = ({ component, auth, logout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          let authValid = false;
          const usuario = auth;
          let jwtToken;
          console.log(auth);
          if (usuario) {
            let auth = usuario !== null && usuario !== {};
            jwtToken = auth && jwt_decode(usuario.token);

            authValid =
              jwtToken && jwtToken.exp > (new Date().getTime() + 1) / 1000;

            if (!authValid) {
              isFunction(logout) && logout();
            }
          }

          if (!authValid) {
            return (
              <Redirect
                to={{
                  pathname: LOGIN,
                  state: { from: props.location },
                }}
              />
            );
          }

          return (
            <PageLayout {...props} {...rest} component={component}></PageLayout>
          );
        } catch (error) {
          return error;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
