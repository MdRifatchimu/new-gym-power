import React, {useEffect, useState} from "react";
import {HashLink} from "react-router-hash-link";
import {useParams} from "react-router";
import {Nav} from "react-bootstrap";

const Details = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  const {serviceId} = useParams();

  useEffect(() => {
    fetch("/service.json")
      .then(res => res.json())
      .then(data => setServiceDetail(data));
  }, []);
  console.log(setServiceDetail);

  const sItems = serviceDetail.find(item => item.id === parseInt(serviceId));

  console.log(sItems);

  return (
    <div className="container">
      <div className="card mb-3" style={{maxWidth: "70%", margin: "auto"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={sItems?.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{sItems?.name}</h5>
              <p className="card-text">{sItems?.description}</p>
              <button type="button" className="btn btn-info btn-lg">
                <Nav.Link as={HashLink} to="/home#services" className="items">
                  Services
                </Nav.Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
