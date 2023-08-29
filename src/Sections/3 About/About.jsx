import React from "react";
import SecondaryBtn from "../../Components/SecondaryBtn";

import "./About.css";
const About = () => {
  return (
    <section id="about" class="px-4 px-sm-0">
      <div class="container about-wrapper">
        <div class="row flex-row-reverse">
          <div class="col-12 col-sm-6 my-auto">
            <img
              class="img-fluid"
              src="Assets/DrawKit Vector Illustration-2.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 text-center text-sm-start">
            <h2 class="mt-sm-5 pt-5 mx-4">
              Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
            </h2>
            <h5 class="mt-5 ms-sm-5 text-decoration-underline">
              Vulputate et vulputate suspendisse natoque!
            </h5>
            <p class="mx-4 mt-4">
              Euismod magna id purus eget nunc ligula suspendisse dui netus.
              Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis
              vulputate et vulputate suspendisse natoque id tellus consectetur
              pulvinar et.
            </p>
            <SecondaryBtn
              name="Lorem Ipsum"
              classNames="my-5 mt-sm-5 ms-sm-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
