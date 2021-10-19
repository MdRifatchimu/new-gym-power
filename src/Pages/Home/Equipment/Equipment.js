import React from "react";
import "./Equipment.css";

const Equipment = () => {
  return (
    <div className=" my-5 ">
      <h1 className="text-center">Our Unique Equipments</h1>
      <hr />
      <br />
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
    </div>
  );
};

export default Equipment;
