import React from "react";

const Fitness = () => {
  return (
    <div className="container">
      <h2 className="text-center text-danger pb-3">
        <u> Hear What Our Clients Have to Say About Us </u>
      </h2>
      <div
        className="accordion d-flex justify-content-center align-items-center height"
        id="accordionExample"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <ul className="testimonial-list">
                <li>
                  <div
                    className="card p-3"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src="https://i.imgur.com/G1pXs7D.jpg"
                        width="50"
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="d-flex flex-column ml-2">
                        <span className="font-weight-normal">
                          Milton Austin
                        </span>
                        <span>Sales Manager, Stack</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="card p-3"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src="https://i.imgur.com/udGH5tO.jpg"
                        width="50"
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="d-flex flex-column ml-2">
                        <span className="font-weight-normal">John Reeves</span>
                        <span>Head of Sales, Asana</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="card p-3"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src="https://i.imgur.com/Uz4FjGZ.jpg"
                        width="50"
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="d-flex flex-column ml-2">
                        <span className="font-weight-normal">Luke Harper</span>
                        <span>Sales Team Lead,Sketch</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 testimonials-margin">
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <h4>It was a great experience</h4>
                  <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    “I LIKE MY TRAINER. I LIKE THE LOOK OF THE STUDIO. I LIKE
                    THE PEOPLE WHO USE IT. I LIKE THE MIX OF THOSE PEOPLE.” ...
                    “ITS A VERY CLEAN, LOW KEY GYM. ”
                  </p>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <h4>Thanks for this great service</h4>
                  <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    “I LIKE MY TRAINER. I LIKE THE LOOK OF THE STUDIO. I LIKE
                    THE PEOPLE WHO USE IT. I LIKE THE MIX OF THOSE PEOPLE.” ...
                    “ITS A VERY CLEAN, LOW KEY GYM. ”
                  </p>
                </div>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <h4>You all are awesome thanks a lot</h4>
                  <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    “I LIKE MY TRAINER. I LIKE THE LOOK OF THE STUDIO. I LIKE
                    THE PEOPLE WHO USE IT. I LIKE THE MIX OF THOSE PEOPLE.” ...
                    “ITS A VERY CLEAN, LOW KEY GYM. ”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
