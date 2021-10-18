import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./Banner/Banner";
import Equipment from "./Equipment/Equipment";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Equipment></Equipment>
      <Services></Services>
      <Testimonial></Testimonial>
    </Container>
  );
};

export default Home;
