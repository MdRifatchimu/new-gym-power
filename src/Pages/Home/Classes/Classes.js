import React from "react";
import "./Classes.css";
import "../HomeAnimate.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Classes = () => {
  return (
    <div>
      <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <section class="classes" id="classes">
          <div class="container">
            <div class="content">
              <div class="box img wow slideInLeft">
                <img src="https://i.ibb.co/09pJ1Dx/class2.png" alt="classes" />
              </div>
              <div class="box text wow slideInRight">
                <h2>Our Classes</h2>
                <p>
                  Better For Your Leg Exercise Gymnasia apparatuses such as
                  barbells, jumping board, running path, tennis-balls, cricket
                  field, and fencing area are used as exercises
                </p>
                <div class="class-items">
                  <div class="item wow bounceInUp">
                    <div class="item-img">
                      <img
                        src="https://i.ibb.co/xhfNZL4/class1.jpg"
                        alt="classes"
                      />
                      <div class="price">$99</div>
                    </div>
                    <div class="item-text">
                      <h4>Stretching Training</h4>
                      <p>
                        Better For Your Leg Exercise Gymnasia apparatuses such
                        as barbells,
                      </p>
                      <a href="">Get Details</a>
                    </div>
                  </div>
                  <div class="item wow bounceInUp">
                    <div class="item-text">
                      <h4>Stretching Training</h4>
                      <p>
                        jumping board, running path, tennis-balls, cricket
                        field, and fencing area are used as exercises
                      </p>
                      <a href="">Get Details</a>
                    </div>

                    <div class="item-img">
                      <img
                        src="https://i.ibb.co/xhfNZL4/class1.jpg"
                        alt="classes"
                      />
                      <div class="price">$99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Classes;
