import React from "react";
import {Link} from "react-router-dom";
import "./Service.css";

const Service = props => {
  const {name, image, description} = props.service || {};

  return (
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="img-card ">
          <img src={image} alt="" />
        </div>
        <div class="card-content">
          <h4 class="card-title">Name: {name}</h4>
          <p class="">Description: {description}</p>
        </div>
        <div class="card-read-more">
          <Link to="/services" class="btn btn-link btn-block">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
