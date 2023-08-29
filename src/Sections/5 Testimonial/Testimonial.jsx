import React from "react";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <section id="testimnol" class="px-4 px-sm-0">
      <div class="container testimnol-wrapper">
        <div class="row">
          <div class="col-12 col-sm-6 mt-5 pt-5 my-sm-auto text-center">
            <img class="img-testimnol" src="Assets/Rectangle 4200.png" alt="" />
          </div>
          <div class="col-12 col-sm-6 my-5 text-center text-sm-start">
            <h2 class="mt-5 mt-sm-0">What our customers thought?</h2>
            <span class="my-5">
              Euismod magna id purus eget nunc ligula suspendisse dui netus.
              Condimentum blandit rutrum at mauris enim pulvinar duis etiam
              duis.
            </span>
            <h4 class="my-5">Holly Davidson</h4>

            <img class="mx-3" src="Assets/trending_flat.png" alt="" />
            <img src="Assets/trending_flat-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
