import React from "react";
import "./Training.css";

const Training = () => {
  return (
    <div>
      <section class="start-today">
        <div class="container">
          <div class="content">
            <div class="box text wow slideInLeft">
              <h2>Start Your Training Today</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <a href="" class="btn">
                Start Now
              </a>
            </div>
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
