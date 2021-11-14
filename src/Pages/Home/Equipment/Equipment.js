import React from "react";
import "./Equipment.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const Equipment = () => {
  return (
    <div className="container my-5 ">
      <h1 className="text-center">Our Unique Equipments</h1>
      <hr />
      <br />
      <ScrollAnimation animateIn="fadeIn">
        <div className="row justify-content-center">
          <div className="col " align="center">
            <div className="profile-card my-2">
              <img src="https://i.ibb.co/BqNwFnp/1.jpg" alt="" />
              <div className="profile-name">Weight Squats</div>
              <div className="profile-username">@NewGymPower</div>
            </div>
          </div>
          <div className="col" align="center">
            <div className="profile-card my-2">
              <img
                src="https://i.ibb.co/ZBQLmny/3.jpg"
                className="img img-responsive"
                alt=""
              />
              <div className="profile-name">Chest Flipper</div>
              <div className="profile-username">@NewGymPower</div>
            </div>
          </div>
          <div className="col" align="center">
            <div className="profile-card my-2">
              <img
                src="https://i.ibb.co/pQmKytY/3.jpg"
                className="img img-responsive"
                alt=""
              />
              <div className="profile-name">Shoulder Increaser</div>
              <div className="profile-username">@NewGymPower</div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Equipment;
