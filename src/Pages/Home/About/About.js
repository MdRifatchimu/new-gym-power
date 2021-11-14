import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section class="about" id="about">
        <div class="container">
          <div class="content">
            <div class="box wow bounceInUp">
              <div class="inner">
                <div class="img">
                  <img src="https://i.ibb.co/H41z6KD/about1.jpg" alt="about" />
                </div>
                <div class="text">
                  <h4>Free Consultation</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </p>
                </div>
              </div>
            </div>
            <div class="box wow bounceInUp" data-wow-delay="0.2s">
              <div class="inner">
                <div class="img">
                  <img src="https://i.ibb.co/9TpQj0t/about2.jpg" alt="about" />
                </div>
                <div class="text">
                  <h4>Best Training</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </p>
                </div>
              </div>
            </div>
            <div class="box wow bounceInUp" data-wow-delay="0.4s">
              <div class="inner">
                <div class="img">
                  <img src="https://i.ibb.co/WDMzHdV/about3.jpg" alt="about" />
                </div>
                <div class="text">
                  <h4>Build Perfect Body</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
