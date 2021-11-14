import React from "react";
import {Container} from "react-bootstrap";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import Equipment from "./Equipment/Equipment";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";
import Training from "./Training/Training";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      <Equipment></Equipment>
      <Services></Services>
      <Training></Training>
      <Classes></Classes>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
