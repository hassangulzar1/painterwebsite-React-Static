import React from "react";
import "./SecondayBtn.css";
const SecondaryBtn = (props) => {
  let classes = "secondary-btn " + props.classNames;

  return <button className={classes}>{props.name}</button>;
};

export default SecondaryBtn;
