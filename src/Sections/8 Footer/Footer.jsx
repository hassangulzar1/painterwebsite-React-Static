import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <div class="container footer-wrapper">
        <div class="row">
          <div class="col-12 col-md-8 my-5 text-center">
            <h2 class="text-light">
              Vulputate et pulvinar ethre Suspendisse tellus consecteur
            </h2>
          </div>
          <div class="col-md-4 text-center my-md-auto mb-5 mb-sm-0">
            <button class="third-btn">Lorem Ipsum</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <hr class="text-light mx-5 my-5" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col d-md-flex justify-content-between mb-5 text-center">
            <p class="text-light mx-5">Copyright © 2022 Lorem Ipsum.</p>
            <p class="text-light mx-5">Privacy Policy | Terms and Conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
