import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./Banner";
import Equipment from "./Equipment/Equipment";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Equipment></Equipment>
      <h1>This is home page</h1>
      <p>you are welcome</p>
    </Container>
  );
};

export default Home;
