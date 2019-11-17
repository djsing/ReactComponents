import React from "react";
import { Link } from "react-router-dom";

const DropDownItem = props => {
  const to = props.to;
  const title = props.title;
  return (
    <span
      className="nav-item nav-link menuItem"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <Link to={to} className="dropdown-item menuItem">
        {title}
      </Link>
    </span>
  );
};

export default DropDownItem;
