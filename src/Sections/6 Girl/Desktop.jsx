import React from "react";
import PrimaryBtn from "../../Components/PrimaryBtn";
import Component2 from "./Component2";
const Desktop = () => {
  return (
    <div class="d-none d-sm-block">
      <Component2 name="Ac viverra sed risus praesent vulputate." />
      <br />
      <br />
      <br />
      <Component2 name="Natoqu consectetur pulvinar." />
      <br />
      <br />
      <br />
      <Component2 name="Sollicitudin ornare tempus nulla varius pulvinar." />
      <br />
      <br />
      <br />
      <Component2 name="Varius pulvinar" />
      <Component2 name="Natoque id tellus consectetur" />
      <br />
      <br />
      <br />
      <Component2 name="Vulputate et vulputate suspendisse" />
      <br />
      <br />
      <PrimaryBtn class="mt-5 ms-5 mb-5" name="Lorem Ipsum" />
    </div>
  );
};

export default Desktop;
