import React from "react";
import "./ThirdBtn.css";
const ThirdBtn = (props) => {
  let classes = "third-btn " + props.className;
  return <button className={classes}>{props.name}</button>;
};

export default ThirdBtn;
