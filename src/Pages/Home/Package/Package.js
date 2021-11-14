import React from "react";
import "./Package.css";
import "../HomeAnimate.css";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const Package = () => {
  return (
    <div>
      <section class="price-package" id="price">
        <div class="container">
          <h2>Choose Your Package</h2>
          <p class="title-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <ScrollAnimation
            animateIn="bounce"
            initiallyVisible={true}
            animateOnce={false}
          >
            <div class="content">
              <div class="box wow bounceInUp">
                <div class="inner">
                  <div class="price-tag">$59/Month</div>
                  <div class="img">
                    <img
                      src="https://i.ibb.co/LtpR04D/price1.jpg"
                      alt="price"
                    />
                  </div>
                  <div class="text">
                    <h3>Body Building Training</h3>
                    <p>Get Free WiFi</p>
                    <p>Month to Month</p>
                    <p>No Time Restrictions</p>
                    <p>Gym and Cardio</p>
                    <p>Service Locker Rooms</p>
                    <a href="" class="btn">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="box wow bounceInUp" data-wow-delay="0.2s">
                <div class="inner">
                  <div class="price-tag">$69/Month</div>
                  <div class="img">
                    <img
                      src="https://i.ibb.co/k2YNWWz/price2.jpg"
                      alt="price"
                    />
                  </div>
                  <div class="text">
                    <h3>Body Building Training</h3>
                    <p>Get Free WiFi</p>
                    <p>Month to Month</p>
                    <p>No Time Restrictions</p>
                    <p>Gym and Cardio</p>
                    <p>Service Locker Rooms</p>
                    <a href="" class="btn">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="box wow bounceInUp" data-wow-delay="0.4s">
                <div class="inner">
                  <div class="price-tag">$99/Month</div>
                  <div class="img">
                    <img
                      src="https://i.ibb.co/zmgBDqT/price3.jpg"
                      alt="price"
                    />
                  </div>
                  <div class="text">
                    <h3>Body Building Training</h3>
                    <p>Get Free WiFi</p>
                    <p>Month to Month</p>
                    <p>No Time Restrictions</p>
                    <p>Gym and Cardio</p>
                    <p>Service Locker Rooms</p>
                    <a href="" class="btn">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Package;
