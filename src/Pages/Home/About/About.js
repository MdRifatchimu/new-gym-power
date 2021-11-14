import React from "react";
import "./About.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const About = () => {
  return (
    <>
      <section class="about" id="about">
        <div class="container">
          <ScrollAnimation animateIn="fadeIn">
            <div class="content">
              <div class="box wow bounceInUp">
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://i.ibb.co/H41z6KD/about1.jpg"
                      alt="about"
                    />
                  </div>
                  <div class="text">
                    <h4>Free Consultation</h4>
                    <p>
                      Helps To lose your belly fat, In the 18th century,
                      Salzmann, German clergyman, opened a gym in Thuringia
                      teaching bodily exercises, including running and swimming.
                    </p>
                  </div>
                </div>
              </div>
              <div class="box wow bounceInUp" data-wow-delay="0.2s">
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://i.ibb.co/9TpQj0t/about2.jpg"
                      alt="about"
                    />
                  </div>
                  <div class="text">
                    <h4>Best Training</h4>
                    <p>
                      Helps To lose your belly fat, In the 18th century,
                      Salzmann, German clergyman, opened a gym in Thuringia
                      teaching bodily exercises, including running and swimming.
                    </p>
                  </div>
                </div>
              </div>
              <div class="box wow bounceInUp" data-wow-delay="0.4s">
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://i.ibb.co/WDMzHdV/about3.jpg"
                      alt="about"
                    />
                  </div>
                  <div class="text">
                    <h4>Build Perfect Body</h4>
                    <p>
                      Helps To lose your belly fat, In the 18th century,
                      Salzmann, German clergyman, opened a gym in Thuringia
                      teaching bodily exercises, including running and swimming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default About;
