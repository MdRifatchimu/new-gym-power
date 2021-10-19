import React from "react";
import rope from "../../images/rope.jpg";
import vBar from "../../images/v-bar.jpg";
import tricep from "../../images/tricep.jpg";
import lat from "../../images/lat.jpg";
import "./Equipments.css";

const Equipments = () => {
  return (
    <div className="backgroundEquipments ">
      <div className="container ">
        <div className="row h-50 align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <img className="img-thumbnail rounded " src={lat} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <h1>Lat Pull Down V Bar With Grip</h1>
            <p>
              When it comes to traditional herbal products still in use today,
              you won’t find many more popular or useful than aloe vera. While
              historically used as a juice or gel, NOW has taken aloe and
              brought it into the modern age with our popular Aloe 10,000 line
              of convenient aloe supplements, as well as our Aloe Vera
              Concentrate for more traditional uses.
            </p>
          </div>
        </div>
        <div className="row h-50 align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <h1> Battle Rope Black Poly Dacron</h1>
            <p>
              CoQ10, short for coenzyme Q10, is a natural, vitamin-like compound
              that’s produced by your body and found in almost every cell. It’s
              a major player in electron transport chain, .* Around 95% of the
              cellular energy your body needs is generated through this process,
              so CoQ10 is kind of important. With healthy energy levels it’s
              easier to maintain a fit and active lifestyle, so CoQ10 truly is
              fuel for your life.* CoQ10 supports a variety of important bodily
              processes, including cardiovascular function, brain and nervous
              system health, immune system function, healthy aging, and more.*
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <img className="img-thumbnail rounded " src={rope} alt="" />
          </div>
        </div>
        <div className="row h-50 align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <img className="img-thumbnail rounded " src={tricep} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <h1>Olympic Triceps Bar</h1>
            <p>
              Strengthen your triceps and improve your overall arm shape with
              the body solid Olympic triceps bar. The 34" length by 7" wide
              triceps bar has a unique design that allows unrestricted arm
              movement and helps reduce injury by eliminating discomfort to
              elbows, forearms, and wrists. Feel confident in your strength
              training and target those hard to hit muscle areas with the body
              solid Olympic triceps bar.
            </p>
          </div>
        </div>
        <div className="row h-50 align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <h1>Lat pull down bar </h1>
            <p>
              CoQ10, short for coenzyme Q10, is a natural, vitamin-like compound
              that’s produced by your body and found in almost every cell. It’s
              a major player in electron transport chain, .* Around 95% of the
              cellular energy your body needs is generated through this process,
              so CoQ10 is kind of important. With healthy energy levels it’s
              easier to maintain a fit and active lifestyle, so CoQ10 truly is
              fuel for your life.* CoQ10 supports a variety of important bodily
              processes, including cardiovascular function, brain and nervous
              system health, immune system function, healthy aging, and more.*
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <img className="img-thumbnail rounded " src={vBar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
