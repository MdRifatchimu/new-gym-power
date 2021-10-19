import React from "react";
import {Link} from "react-router-dom";
import "./Service.css";

const Service = props => {
  const {id, name, image, description} = props.service || {};

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <div className="img-card ">
          <img src={image} alt="" />
        </div>
        <div className="card-content">
          <h4 className="card-title">Name: {name}</h4>
          <p className="">Description: {description}</p>
        </div>
        <div className="card-read-more">
          <Link to={`/details/${id}`} className="btn btn-link btn-block">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
