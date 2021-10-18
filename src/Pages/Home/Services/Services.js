import React, {useEffect, useState} from "react";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then(res => res.json())
      .then(data => setService(data));
  }, []);
  return (
    <div id="services" className="home-service-background">
      <div className="container py-5 ">
        <h1 className="text-center p-3 service-title">
          Check Out Our Services and book one, So That You Can Be A Part Of Us.
        </h1>
        <p className="text-center pb-5 fs-4 fw-normal">
          Our Top Trending and Effective Services
        </p>
        <hr />
        <br />
        <div class="wrapper">
          <div class="container-fostrap">
            <div class="content">
              <div class="container">
                <div class="row">
                  {/* using map to push data to children  */}
                  {services.map(service => (
                    <Service key={service.id} service={service}></Service>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
