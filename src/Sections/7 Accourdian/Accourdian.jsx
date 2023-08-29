import React from "react";
import "./Accourdian.css";
const Accourdian = () => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Phasellus a vitae iaculis magna.</h2>
            <p>Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h5>Quam vehicula faucibus amet lorem.</h5>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Euismod magna id purus eget nunc ligula suspendisse dui
                      netus. Condimentum blandit rutrum at mauris enim pulvinar
                      duis etiam duis. Mauris fermentum praesent tellus euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item my-5">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5>Pellentesque tempus sed phasellus vel.</h5>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Euismod magna id purus eget nunc ligula suspendisse dui
                      netus. Condimentum blandit rutrum at mauris enim pulvinar
                      duis etiam duis. Mauris fermentum praesent tellus euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h5>
                      Mauris fermentum praesent tellus euismod pellentesque urna
                      ac massa in.
                    </h5>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Euismod magna id purus eget nunc ligula suspendisse dui
                      netus. Condimentum blandit rutrum at mauris enim pulvinar
                      duis etiam duis. Mauris fermentum praesent tellus euismod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accourdian;
