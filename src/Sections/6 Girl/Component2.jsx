import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const Component2 = (props) => {
  return (
    <a className="text-decoration-none py-3 px-4 anker-2" href="">
      <FontAwesomeIcon
        className="mx-1"
        icon={faCircleCheck}
        style={{ color: "#f9b800" }}
      />
      {props.name}
    </a>
  );
};

export default Component2;
