import React from "react";
import aloe from "../../images/aloe.jpg";
import coq10 from "../../images/coq.jpg";
import "./Supliments.css";

const Supliments = () => {
  return (
    <div className="suplimentsBackground">
      <div className="container">
        <div className="row h-50 align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <img className="img-thumbnail rounded " src={aloe} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <h1>Aloe</h1>
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
            <h1>CoQ10</h1>
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
            <img className="img-thumbnail rounded " src={coq10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supliments;
