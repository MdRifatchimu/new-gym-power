import React from "react";
import {Link} from "react-router-dom";
import "./Service.css";

const Service = props => {
  const {id, name, image, description} = props.service || {};

  return (
    <div className=" ">
      {/* <div className="card ">
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
      </div> */}
      <div className="postcard dark green">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src={image} />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue">{name}</h1>

          <div className="postcard__subtitle small"></div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{description}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item play blue">
              <Link to={`/details/${id}`}>
                <i className="fas fa-shopping-cart mx-2"></i>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
