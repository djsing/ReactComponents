import React from "react";
import { Link } from "react-router-dom";

const NavItem = props => {
  const to = props.to;
  const title = props.title;
  return (
    <span
      className="nav-item nav-link"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <Link to={to} className="nav-custom">
        {title}
      </Link>
    </span>
  );
};

export default NavItem;
