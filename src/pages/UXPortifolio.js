import React from "react";
import img1 from "../images/carred1.png";
import img2 from "../images/wholelightpagefront.png";
import img3 from "../images/portifolio.png";
import img4 from "../images/printbasehome.png";
import "./uxportifolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

const UXPortifolio = () => {
  return (
    <div
      className="ux vh-100 position-relative "
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <div
        className="dots position-fixed "
        style={{ right: 10, top: "50%", transform: "rotate(90deg)" }}
      >
        <i className="fa fa-circle text-white" aria-hidden="true"></i>
        <i className="fa fa-circle-o text-white mx-3" aria-hidden="true"></i>
        <i className="fa fa-circle-o text-white" aria-hidden="true"></i>
        <i className="fa fa-circle-o text-white ms-3" aria-hidden="true"></i>
      </div>
      <div
        className="envelop position-absolute text-white p-2 rounded"
        style={{
          right: 85,
          top: "70%",
          backgroundColor: "#292929",
          zIndex: 1000,
        }}
      >
        <i className="fa fa-envelope-o fs-4" aria-hidden="true"></i>
      </div>
      <div
        className="position-absolute circle-2 user-img border border-secondary p-5 d-flex align-items-center justify-content-center"
        style={{
          top: "20.8%",
          left: "42.4%",
          borderRadius: "50%",
          width: "15%",
          height: "30%",
          zIndex: 1,
          color: "#4d4d4d",
        }}
      ></div>
      <div
        className="position-absolute circle-3 user-img border border-secondary p-5 d-flex align-items-center justify-content-center"
        style={{
          top: "15.8%",
          left: "40.0%",
          borderRadius: "50%",
          width: "20%",
          height: "40%",
          zIndex: 1,
          color: "#4d4d4d",
        }}
      ></div>
      <div
        className="position-absolute circle-4 user-img border border-secondary p-5 d-flex align-items-center justify-content-center"
        style={{
          top: "-2.8%",
          left: "30.0%",
          borderRadius: "50%",
          width: "40%",
          height: "80%",
          zIndex: 1,
          color: "#4d4d4d",
        }}
      ></div>
      <div
        className="position-absolute circle-5 user-img border border-secondary p-5 d-flex align-items-center justify-content-center"
        style={{
          top: "15.8%",
          left: "40.0%",
          borderRadius: "50%",
          width: "20%",
          height: "40%",
          zIndex: 1,
          color: "#4d4d4d",
        }}
      ></div>
      <section className="nav-section pt-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent bg-body-tertiary sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bold text-white" href="/#">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <i className="fa fa-github-alt ms-3" aria-hidden="true"></i>
            </a>

            <div className="collapsed navbar-collapses" id="navbarScroll">
              <ul
                className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
                // style="--bs-scroll-height: 100px;"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold"
                    aria-current="page"
                    href="/#"
                  >
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="ms-3">GET IN TOUCH</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="hero-section pt-5">
        <div className="d-flex flex-column mt-5 align-items-center justify-content-center">
          <div
            className="user-img border border-3 border-secondary p-5 d-flex align-items-center justify-content-center"
            style={{ width: 120, height: 120, borderRadius: 60, zIndex: 1000 }}
          >
            {/* <img className="" src={img1} alt="img1" style={{ width: 100 }} /> */}
            <span className="fs-1">
              <i
                class="fa fa-file-code-o text-secondary"
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <p className="text-muted mt-3" style={{ zIndex: 1000 }}>
            SOFTWARE ENGINEER
          </p>
          <h3 className="fw-bold text-white" style={{ zIndex: 1000 }}>
            EPHRAIM MATARUTSE
          </h3>
          <div className="nav-tab-section mt-2">
            <div className="tabs d-flex justify-content-betweens text-white">
              <p
                className="border border rounded-pill px-3"
                style={{ zIndex: 1000 }}
              >
                EXPERINCE
              </p>
              <p
                className="mx-4 border bg-white text-dark fw-bold rounded-pill px-3"
                style={{ zIndex: 1000 }}
              >
                SKILLS
              </p>
              <p className="border rounded-pill px-3" style={{ zIndex: 1000 }}>
                PRODUCTS
              </p>
              <p
                className="mx-4 border rounded-pill px-3"
                style={{ zIndex: 1000 }}
              >
                ABOUT
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="experience mt-5 pt-2 "
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="container py-2 py-md-5 ">
          <h4 className="fw-bold text-white text-center">Work Experince</h4>
          <div className="row mt-md-5 mt-3">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 borders rounded py-md-4 py-0"
                  style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.5)" }}
                >
                  <h6 className="fw-bold text-white">
                    Front End Developer & Graphics Designer
                  </h6>
                  <h6 className="fw-bold text-white">
                    Wholelight Trading, Eastlea, HRE
                  </h6>
                  <p className="text-white">October 2022 – May 2023</p>
                  <div className="tasks">
                    <ul className="text-white">
                      <li className="text-white">
                        Generated banner designs, redesigned the logo and other
                        company documents using adobe Photoshop.
                      </li>
                      <li>
                        Led the design of the wholelight e-commerce store.
                      </li>
                      <li>
                        Develop multiple react-based applications using Redux,
                        Next.js, Material UI and other UI libraries.
                      </li>
                      <li>
                        Designed multiple dynamic and browser compatible pages
                        using HTML5, CSS3, Javascript (React, Redux).
                      </li>
                      <li>
                        Built cross-browser compatible and accessibility
                        compliant websites, resulting faster load time.
                      </li>
                      <li>
                        Produced multiple visual elements of web applications by
                        translating UI/UX design wireframes into code, producing
                        high quality markup using HTML5 and CSS3.
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-md-6 borders rounded py-md-4 py-5 ps-5"
                  style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.0)" }}
                >
                  <h6 className="fw-bold text-white">
                    Software Engineer Attachment
                  </h6>
                  <h6 className="fw-bold text-white">
                    Chitungwiza Hospital, CZA
                  </h6>
                  <p className="text-white">March 2019 – May 2020</p>
                  <div className="tasks">
                    <ul className="text-white">
                      <li className="text-white">
                        Maintained and updated existing websites to improve
                        overall user experience and functionality.
                      </li>
                      <li>
                        Worked on multiple client-side projects utilizing
                        vanilla JavaScript, HTML, and CSS.
                      </li>
                      <li>
                        Collaborated with the development team to implement new
                        features and resolve any issues.
                      </li>
                      <li>SAP configuration and troubleshooting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills py-5" style={{ backgroundColor: "#1f1f1f" }}>
        <div>
          <div className="row ">
            <div
              className="col-md-6 text-white p-5"
              style={{ backgroundColor: "#242424" }}
            >
              <h3 className="fw-bold">Skills</h3>
              <div className="skills">
                <p className="fw-bold">React</p>
                <div className="progress mb-5">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    0%
                  </div>
                </div>
                <div className="progress mb-5">
                  <div
                    className="progress-bar bg-secondary w-25"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <div className="progress mb-5">
                  <div
                    className="progress-bar bg-info text-dark w-50"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 text-white container py-4 py-md-0"
              // style={{ backgroundColor: "#242424" }}
            >
              <div className="container d-flex flex-wrap justify-content-between align-items-center px-5">
                <div
                  className="language-card rounded p-5 mb-5"
                  style={{ backgroundColor: "#242424" }}
                >
                  <FontAwesomeIcon
                    className="fa fa-html5 text-secondary fs-1"
                    icon="fab fa-js-square"
                  />
                </div>
                <div
                  className="language-card rounded p-5 mt-5"
                  style={{ backgroundColor: "#242424" }}
                >
                  <FontAwesomeIcon
                    className="fa fa-html5 text-secondary fs-1"
                    icon="fab fa-css3-alt"
                  />
                </div>
                <div
                  className="language-card rounded p-5 mb-5"
                  style={{ backgroundColor: "#242424" }}
                >
                  <FontAwesomeIcon
                    className="fa fa-html5 text-secondary fs-1"
                    icon="fab fa-python"
                  />
                </div>
                <div
                  className="language-card rounded p-5 mt-5"
                  style={{ backgroundColor: "#242424" }}
                >
                  <i
                    className="fa fa-html5 text-secondary fs-1"
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="language-card rounded p-5 mb-5"
                  style={{ backgroundColor: "#242424" }}
                >
                  <FontAwesomeIcon
                    className="fa fa-html5 text-secondary fs-1"
                    icon="fab fa-node-js"
                    // icon="fab fa-html5"
                  />
                </div>
                <div
                  className="language-card rounded p-5"
                  style={{ backgroundColor: "#242424" }}
                >
                  <FontAwesomeIcon
                    className="fa fa-html5 text-secondary fs-1"
                    icon="fab fa-react"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects py-5" style={{ backgroundColor: "#1f1f1f" }}>
        <div className="container">
          <h5 className="fw-bold text-center text-white py-3">Projects</h5>
          <div className="card-holder">
            <div className="d-flex justify-content-between">
              <div
                className="project p-2 border bg-primarys d-flex justify-content-center align-items-center rounded"
                style={{ width: "33%" }}
              >
                <img src={img2} alt="project1" style={{ width: "105%" }} />
              </div>
              <div
                className="project p-2 border bg-primarys d-flex justify-content-center align-items-center rounded"
                style={{ width: "33%" }}
              >
                <img src={img4} alt="project1" style={{ width: "105%" }} />
              </div>
              <div
                className="project p-2 border bg-primarys d-flex justify-content-center align-items-center rounded"
                style={{ width: "33%" }}
              >
                <img src={img3} alt="project1" style={{ width: "105%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-sections text-white  py-5"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="p-2 border d-flex justify-content-center align-items-center rounded"
                style={{ height: 200 }}
              >
                <img src={img1} alt="project1" style={{ width: "30%" }} />
              </div>
            </div>
            <div className="col-md-8">
              <h5 className="fw-bold mt-4 mt-md-0">About</h5>
              <div className="row">
                <div className="col-md-8 ps-5">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam similique voluptate tenetur, accusamus sapiente
                    excepturi necessitatibus veritatis quis repellat libero
                    nobis numquam cumque eum eveniet?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="preview px-4 py-5 px-md-0 text-dark"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="prices">
          <div className="row  text-center d-flex align-items-center ">
            <div className="col-md-11 mx-auto">
              <div className="row px-auto d-flex justify-content-center align-items-center">
                <div
                  className="col-md-3 py-4 rounded text-white"
                  style={{
                    boxShadow: "0px 10px 15px -3px rgba(210,20,10,0.2)",
                    backgroundColor: "#292929",
                  }}
                >
                  <p className="fw-bold">Startup Plan</p>
                  <div className="price d-flex justify-content-center">
                    <span>$</span>
                    <h1 className="fw-bold text-danger">39</h1>
                    <p className="fw-bold pt-3">.99</p>
                  </div>
                  <hr />
                  <div className="features" style={{ lineHeight: 0.9 }}>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                  </div>
                  <button className="btn btn-danger fw-bold ms-3 rounded-0 mx-auto">
                    Get Started <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
                <div
                  className="col-md-5 my-4 my-md-0 mx-2 text-white py-4 border border-danger border-2  position-relative"
                  style={{
                    borderRadius: 4,
                    boxShadow: "0px 10px 15px -3px rgba(256,0,0,0.5)",
                    backgroundColor: "#292929",
                  }}
                >
                  <div
                    className="tiangle position-absolute bg-danger"
                    style={{
                      clipPath: "polygon(49% -1%, 82% 54%, 19% 50%)",
                      height: 90,
                      width: 150,
                      borderRadius: 10,
                      transform: "rotate(45deg)",
                      right: -44,
                      top: -13,
                      overflow: "",
                    }}
                  >
                    <p
                      className="recommended pt-4 text-white fw-bold"
                      style={{ fontSize: 12 }}
                    >
                      POPULAR
                    </p>
                  </div>
                  <p className="fw-bold">Startup Plan</p>
                  <div className="price d-flex justify-content-center">
                    <span>$</span>
                    <h1 className="fw-bold text-danger">59</h1>
                    <p className="fw-bold pt-3">.99</p>
                  </div>
                  <hr />
                  <div className="features" style={{ lineHeight: 0.9 }}>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                  </div>
                  <button className="btn btn-danger fw-bold ms-3 rounded-0 mx-auto">
                    Get Started <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
                <div
                  className="col-md-3 text-white py-4 rounded"
                  style={{
                    boxShadow: "0px 10px 15px -3px rgba(210,20,10,0.2)",
                    backgroundColor: "#292929",
                  }}
                >
                  <p className="fw-bold">Startup Plan</p>
                  <div className="price d-flex justify-content-center">
                    <span>$</span>
                    <h1 className="fw-bold text-danger">49</h1>
                    <p className="fw-bold pt-3">.99</p>
                  </div>
                  <hr />
                  <div className="features" style={{ lineHeight: 0.9 }}>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                  </div>
                  <button className="btn btn-danger fw-bold ms-3 rounded-0 mx-auto">
                    Get Started <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact text-white position-relative"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="contact container py-5">
          <div className="contactme pt-5">
            <h6 className="primary fw-bold text-center">CONTACT</h6>
            <h5 className="text-center">Don't be shy hit me up!</h5>
          </div>
          <div className="locations">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form className="was-validated" action="#">
                  <input
                    className="form-control mt-3"
                    placeholder="Your name"
                    type="text"
                    required
                  />
                  <input
                    className="form-control my-4"
                    placeholder="example@gmail.com"
                    type="email"
                    required
                  />
                  <textarea
                    className="form-control"
                    id="validationServer01"
                    type="text"
                    placeholder="Message"
                    rows={6}
                    required
                  />
                  <div className="d-flex justify-content-end">
                    <input className="btn btn-danger my-4 " type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div
            className="position-relative overflow-hidden"
            style={{ width: 400, height: 300 }}
          >
            <iframe
              //   frameborder={0}
              title="one"
              scrolling="no"
              style={{
                width: "100%",
                height: "100%",
                frameborder: 0,
                scrolling: "no",
                top: -50,
              }}
              className="position-absolute"
              src="http://localhost:3000/"
              frameborder="0"
            ></iframe>
          </div> */}
          {/* <div className="i fa fa-certificate"></div> */}
        </div>
      </section>
      <section
        className="footer border border-2 border-start-0 border-end-0 border-bottom-0"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="footer text-white w-100 bottom-0">
          <div className="d-flex align-items-center justify-content-around py-3 flex-wrap">
            <h6 className="fw-bold">Copyright &copy; All rights reserved </h6>
            <div className="icons">
              <i className="fa fa-linkedin me-4 text-white"></i>
              <i className="fa fa-github me-4 text-white"></i>
              <i className="fa fa-facebook text-white"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UXPortifolio;
