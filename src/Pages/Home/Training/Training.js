import React from "react";
import "./Training.css";
import "../HomeAnimate.css";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Training = () => {
  return (
    <div>
      <section class="start-today">
        <div class="container">
          <div class="content">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
            >
              <div class="box text wow slideInLeft">
                <h2>Start Your Training Today</h2>
                <p>
                  Better For Your Leg Exercise Gymnasia apparatuses such as
                  barbells, jumping board, running path, tennis-balls, cricket
                  field, and fencing area are used as exercises
                </p>
                <a href="" class="btn">
                  Start Now
                </a>
              </div>
            </ScrollAnimation>
            <div class="box img wow slideInRight">
              <img
                src="https://i.ibb.co/KrgvQgn/gallery4.jpg"
                alt="start today"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
