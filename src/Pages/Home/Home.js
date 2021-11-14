import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import Equipment from "./Equipment/Equipment";
import Gallery from "./Gallery/Gallery";
import Package from "./Package/Package";
import Services from "./Services/Services";
import Training from "./Training/Training";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      <Training></Training>
      <Equipment></Equipment>
      <Services></Services>
      <Classes></Classes>
      <Gallery></Gallery>
      <Package></Package>
    </div>
  );
};

export default Home;
