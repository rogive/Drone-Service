import React from "react";
import { Link } from "react-router-dom";
import "./LinkList.css";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <Link onClick={link.onClick} className="link-list-item-url" to={link.linkto}> {link.title} </Link>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;