import React from "react";
import "./Classes.css";

const Classes = () => {
  return (
    <div>
      <section class="classes" id="classes">
        <div class="container">
          <div class="content">
            <div class="box img wow slideInLeft">
              <img src="https://i.ibb.co/09pJ1Dx/class2.png" alt="classes" />
            </div>
            <div class="box text wow slideInRight">
              <h2>Our Classes</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <a href="">Get Details</a>
                  </div>
                </div>
                <div class="item wow bounceInUp">
                  <div class="item-text">
                    <h4>Stretching Training</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
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
    </div>
  );
};

export default Classes;