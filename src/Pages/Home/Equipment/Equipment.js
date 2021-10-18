import React from "react";
import "./Equipment.css";

const Equipment = () => {
  return (
    <div class=" my-5 ">
      <h1 className="text-center">Our Unique Equipments</h1>
      <hr />
      <br />
      <div class="row justify-content-center">
        <div class="col " align="center">
          <div class="profile-card my-2">
            <img src="https://i.ibb.co/BqNwFnp/1.jpg" alt="" />
            <div class="profile-name">Weight Squats</div>
            <div class="profile-username">@NewGymPower</div>
          </div>
        </div>
        <div class="col" align="center">
          <div class="profile-card my-2">
            <img
              src="https://i.ibb.co/ZBQLmny/3.jpg"
              class="img img-responsive"
              alt=""
            />
            <div class="profile-name">Chest Flipper</div>
            <div class="profile-username">@NewGymPower</div>
          </div>
        </div>
        <div class="col" align="center">
          <div class="profile-card my-2">
            <img
              src="https://i.ibb.co/pQmKytY/3.jpg"
              class="img img-responsive"
              alt=""
            />
            <div class="profile-name">Shoulder Increaser</div>
            <div class="profile-username">@NewGymPower</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
