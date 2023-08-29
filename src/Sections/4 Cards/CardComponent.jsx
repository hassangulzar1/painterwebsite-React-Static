import React from "react";

const CardComponent = (props) => {
  let classes = "card mb-3 rounded-5 ms-sm-5 " + props.className;
  return (
    <div class={classes} style={{ maxWidth: "25rem" }}>
      <div class="mt-4 ms-4">
        <img class="img-fluid" src={props.img} alt="" />
      </div>
      <div class="d-flex">
        <h2 class="ms-4">{props.num}</h2>
        <h2 class={props.fullStop}>.</h2>
      </div>
      <div class="ms-4 mb-5">
        <h4>{props.h4}</h4>
        <h5 class="mt-3">{props.h5}</h5>
        <h6>{props.h6}</h6>
      </div>
    </div>
  );
};

export default CardComponent;
