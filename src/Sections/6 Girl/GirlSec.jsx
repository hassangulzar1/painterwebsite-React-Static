import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import "./GirlSec.css";

const GirlSec = () => {
  return (
    <section id="last-girl" class="px-4 px-sm-0">
      <div class="container lastgirl-wrapper">
        <div class="row flex-row-reverse">
          <div class="col-12 col-sm-12 col-md-8 col-lg-6 mx-auto my-5">
            <img
              class="img-fluid"
              src="Assets/DrawKit Vector Illustration-3.png"
              alt=""
            />
          </div>
          {/* <!-- !for desktop --> */}
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 my-auto text-center text-lg-start">
            <h2>Cursus Integer consequat Tristique.</h2>
            <Desktop />
            {/* <!-- !for mobile --> */}
            <Mobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GirlSec;
