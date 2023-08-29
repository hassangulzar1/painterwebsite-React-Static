import React from "react";
import "./PrimaryBtn.css";
const PrimaryBtn = (props) => {
  let classes = "primary-btn " + props.class;
  return <button className={classes}>{props.name}</button>;
};

export default PrimaryBtn;
