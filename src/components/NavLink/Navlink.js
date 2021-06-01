import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const NavLink = ({ to, location }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Link replace={to === location.pathname} to={to}>
        <button>{to}</button>
      </Link>
    )}
  />
);

export default withRouter(NavLink);
