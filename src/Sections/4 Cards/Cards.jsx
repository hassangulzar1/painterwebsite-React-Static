import React from "react";
import ThirdBtn from "../../Components/ThirdBtn";
import CardComponent from "./CardComponent";
import "./Cards.css";

const Cards = () => {
  return (
    <section id="cards" class="px-4 px-sm-0">
      <div class="container cards-wrapper">
        <div class="row flex-sm-row-reverse">
          <div class="col m-5 text-center text-sm-start my-sm-auto">
            <p class="text-warning mt-4">
              Quisque porttitor vitae vel amet neque scelerisque mattis.
              Consectetur nibh velit magna consectetur leo.
            </p>
            <h2 class="text-light">Cursus Integer Conseq Aliquam Tristique.</h2>
            <ThirdBtn className="mt-5" name="Lorem Ipsum" />
          </div>

          <div class="col-7 col-sm-3 mt-sm-5 pt-sm-5 mx-auto">
            <CardComponent
              img="Assets/Icon-Images-2.png"
              className="card-yellow"
              num="2"
              fullStop="text-light"
              h4="Iaculis Magna"
              h5="Porttitor"
              h6="neque scelerisque mattis."
            />
            <CardComponent
              img="Assets/Icon-Images-1.png"
              className="mt-5"
              num="4"
              fullStop="text-warning"
              h4="Velit Odio Phir"
              h5="Ametneq"
              h6="magna consectetur leo."
            />
          </div>
          <div class="col-7 col-sm-3 mx-auto mt-5">
            <CardComponent
              img="Assets/Icon-Images.png"
              num="1"
              fullStop="text-warning"
              h4="Phasellus Vitae"
              h5="Quisque"
              h6="Porttitor vitae vel amet"
            />

            <CardComponent
              img="Assets/Icon-Images.png"
              className="mt-5 card-yellow"
              num="3"
              fullStop="text-light"
              h4="Eleifend Pulvinar"
              h5="Vitae"
              h6="Consectetur nibh velit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
