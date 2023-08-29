import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Component = (props) => {
  let classes = props.classNames;
  return (
    <div className={classes}>
      <a className="text-decoration-none py-3 px-4 anker-tag" href="">
        <FontAwesomeIcon
          className="mx-1"
          icon={faCircleCheck}
          style={{ color: "#f9b800" }}
        />
        {props.name}
      </a>
    </div>
  );
};

export default Component;
