import React from "react";
import "./Footer.css";
import logo from "../../../images/footerlogo.png";

const Footer = () => {
  return (
    <div className="background">
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <img width="75" height="75" src={logo} alt="" />
            <h2 className="text-danger">New Gym Power</h2>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-white">Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <p className="text-white">Cool stuff</p>
              </li>
              <li>
                <p className="text-white">Random feature</p>
              </li>
              <li>
                <p className="text-white">Team feature</p>
              </li>
              <li>
                <p className="text-white">Stuff for developers</p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-white">Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <p className="text-white">Resource</p>
              </li>
              <li>
                <p className="text-white">Resource name</p>
              </li>
              <li>
                <p className="text-white">Another resource</p>
              </li>
              <li>
                <p className="text-white">Final resource</p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-white">Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <p className="text-white">Business</p>
              </li>
              <li>
                <p className="text-white">Education</p>
              </li>
              <li>
                <p className="text-white">Government</p>
              </li>
              <li>
                <p className="text-white">Gaming</p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-white">About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <p className="text-white">Team</p>
              </li>
              <li>
                <p className="text-white">Locations</p>
              </li>
              <li>
                <p className="text-white">Privacy</p>
              </li>
              <li>
                <p className="text-white">Terms</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
