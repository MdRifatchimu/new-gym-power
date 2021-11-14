import React from "react";
import "./Gallery.css";
import "../HomeAnimate.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const Gallery = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <section class="gallery" id="gallery">
          <div class="content">
            <div class="box wow slideInLeft">
              <img src="https://i.ibb.co/6Y5RXKb/gallery1.jpg" alt="gallery" />
            </div>
            <div class="box wow slideInRight">
              <img src="https://i.ibb.co/177nQR1/gallery2.jpg" alt="gallery" />
            </div>
            <div class="box wow slideInLeft">
              <img src="https://i.ibb.co/L0QN9Jd/gallery3.jpg" alt="gallery" />
            </div>
            <div class="box wow slideInRight">
              <img src="https://i.ibb.co/KrgvQgn/gallery4.jpg" alt="gallery" />
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Gallery;
