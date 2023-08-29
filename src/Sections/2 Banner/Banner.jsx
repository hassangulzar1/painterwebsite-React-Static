import React from "react";
import "./Banner.css";
import Component from "./Component";
import PrimaryBtn from "../../Components/PrimaryBtn";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>Risus praesent vulputate</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <h1 className="d-inline">
              Cursus Consequate Natiquate
              <h1 className="auto-typed d-inline"></h1>
            </h1>
          </div>
        </div>

        <div className="row mt-5 pt-md-5 text-center">
          <Component
            name=" Cursus Integer"
            classNames="col-12 col-sm-6 col-md-3"
          />
          <Component
            name=" Integer Conster"
            classNames="col-12 my-5 my-sm-0 col-sm-6 col-md-3"
          />
          <Component
            name=" Tellus Euismod"
            classNames="col-12 col-sm-6 col-md-3 mt-sm-5 mt-md-0"
          />
          <Component
            name=" Aliquot Tristique"
            classNames="col-12 my-5 my-sm-0 col-sm-6 col-md-3 mt-sm-5 mt-md-0"
          />
        </div>

        <div className="row mt-sm-5 text-center">
          <Component
            name=" Tellus Euismod"
            classNames="col-12 col-sm-6 offset-md-3 col-md-3"
          />
          <Component
            name="  Aliquot Tristique"
            classNames="col-12 my-5 my-sm-0 col-sm-6 col-md-3"
          />
        </div>

        <div className="row mt-sm-5 pt-sm-5 text-center">
          <div className="col">
            <PrimaryBtn name="Lorem Ipsum" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
