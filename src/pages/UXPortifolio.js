import React, { useState } from "react";
import axios from "axios";
import img1 from "../images/carred1.png";
import img2 from "../images/wholelightpagefront.png";
import img3 from "../images/portifolio.png";
import img4 from "../images/printbasehome.png";
import code from "../images/code img.jpeg";
import cryptoo from "../images/cryptoO.png";
import carrental from "../images/carrental.png";
import jobite from "../images/jobit.png";
import "./uxportifolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

const UXPortifolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      // .post("http://localhost:4000/send-email", formData)
      .post("https://emailbackend.vercel.app/send-email", formData)
      .then((response) => {
        console.log(response);
        console.log("formdata", formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   setFormData(Object.fromEntries(data.entries()));
  //   console.log("data", data);
  //   // fetch("https://emailbackend.vercel.app/send-mail", {
  //   fetch("http://localhost:4000/send-email", {
  //     method: "POST",
  //     body: {
  //       email: "ephraimmatarutse@gmail.com",
  //       subject: "Hie can l get some wodrkhs",
  //       message: "When are you frees",
  //     },
  //     // body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };

  // const [activeTab, setActiveTab] = useState(0);
  // const tabRef = useRef(null);
  // const [first, setFirst] = useState(true);
  // const [second, setSecond] = useState(false);
  // const [third, setThird] = useState(false);
  // const [forth, setForth] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // useEffect(() => {
  // function handleResize() {
  //   const height = window.innerHeight;
  //   console.log("vertical width", height);
  // }

  // const handleResize = () => {
  // return setScreenWidth(window.innerHeight);
  // const maxHeight = window.screen.height;
  // if (screenWidth > maxHeight) {
  //   setSecond(true);
  // } else {
  //   setFirst(true);
  // }
  // console.log("hdskj");
  // };

  // const handleScroll = () => {
  //   return console.log(window.scrollY);
  // };

  // window.addEventListener("resize", handleResize);
  // window.addEventListener("scroll", () => {
  //   console.log(screenWidth);
  // });

  // const handleScroll = () => {
  //   const sections = document.querySelectorAll(".section");
  //   const scrollTop = window.pageYOffset;
  //   let currentSectionIndex = 0;

  //   sections.forEach((section, index) => {
  //     const sectionTop = section.offsetTop - tabRef.current.offsetHeight;
  //     if (scrollTop >= sectionTop) {
  //       currentSectionIndex = index;
  //     }
  //   });

  //   setActiveTab(currentSectionIndex);
  //   console.log(currentSectionIndex);
  // };

  // window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };

  //   // window.addEventListener("resize", handleResize);
  //   // return () => window.removeEventListener("resize", handleResize);
  // }, [activeTab]);
  console.log(formData);
  return (
    <div
      className="ux vh-100 position-relative "
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <div
        className="dots position-fixed "
        // ref={tabRef}
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
        <a href="mailto:ephraimmatarutse@gmail.com">
          <i className="fa fa-envelope-o fs-4" aria-hidden="true"></i>
        </a>
      </div>
      {/* <div
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
      ></div> */}
      <section className="section nav-section pt-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent bg-body-tertiary sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bold text-white" href="/#">
              <a href="http://www.linkedin.com/in/ephraimmatarutse">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/dopswae98">
                <i className="fa fa-github-alt ms-3" aria-hidden="true"></i>
              </a>
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
                    <a
                      href="mailto:ephraimmatarutse@gmail.com"
                      className="text-color"
                    >
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                    <span className="ms-3">GET IN TOUCH</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="hero-section pt-5">
        <div className="d-flex flex-column mt-5 align-items-center justify-content-center position-relative ">
          <div
            className="user-img borders position-absolute opacity-25b rounded-circle border-5"
            style={{
              padding: 110,
              borderWidth: 40,
              border: "45px solid grey",
              opacity: 0.04,
            }}
          >
            <div
              className="user-img borderv border-3x  border-secondary d-flex align-items-center justify-content-center"
              style={{
                width: 320,
                height: 320,
                borderRadius: 160,
                zIndex: 1000,
                border: "35px solid grey",
                padding: 10,
              }}
            >
              <div
                className="user-img border border-3 border-secondary p-5 d-flex align-items-center justify-content-center"
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  zIndex: 1000,
                }}
              >
                {/* <img className="" src={img1} alt="img1" style={{ width: 100 }} /> */}
                <span className="fs-1">
                  <i
                    className="fa fa-file-code-o text-secondary"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-text text-center mt-5">
            <p className="text-muted mt-3" style={{ zIndex: 1000 }}>
              SOFTWARE ENGINEER
            </p>
            <h3 className="fw-bold text-white" style={{ zIndex: 2000 }}>
              EPHRAIM MATARUTSE
            </h3>
            <div className="nav-tab-section mt-5 mb-5">
              <div className="tabs d-flex justify-content-center align-items-center text-white">
                <p
                  className="border border rounded-pill px-3 "
                  style={{ zIndex: 1000 }}
                >
                  <a href="#experience" className="link-style">
                    EXPERINCE
                  </a>
                </p>
                <p
                  className="mx-4 border bg-white text-dark fw-bold rounded-pill px-3"
                  style={{ zIndex: 1000 }}
                >
                  <a href="#skills" className="link-style text-dark">
                    SKILLS
                  </a>
                </p>
                <p
                  className="border rounded-pill px-3"
                  style={{ zIndex: 1000 }}
                >
                  <a href="#projects" className="link-style">
                    PROJECTS
                  </a>
                </p>
                <p
                  className="mx-4 border rounded-pill px-3"
                  style={{ zIndex: 1000 }}
                >
                  <a href="#about" className="link-style">
                    ABOUT
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section experience mt-5 pt-5 "
        style={{ backgroundColor: "#1f1f1f" }}
        id="experience"
      >
        <div className="container py-2 py-md-5 pt-2 ">
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

      <section
        className="section skills py-5"
        id="skills"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div>
          <div className="row ">
            <div
              className="col-md-6 text-white px-5 py-3"
              style={{ backgroundColor: "#242424" }}
            >
              <h3 className="fw-bold">Skills</h3>
              <div className="skills">
                <p className="fw-bold">React</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  >
                    95%
                  </div>
                </div>
                <p className="fw-bold">Python</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <p className="fw-bold">JavaScript</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-info text-dark"
                    role="progressbar"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "88%" }}
                  >
                    88%
                  </div>
                </div>
                <p className="fw-bold">HTML</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-warning text-dark"
                    role="progressbar"
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "92%" }}
                  >
                    92%
                  </div>
                </div>
                <p className="fw-bold">CSS</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger text-dark"
                    role="progressbar"
                    aria-valuenow="94"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "94%" }}
                  >
                    94%
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
      <section
        className="section projects py-5"
        id="projects"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="container">
          <h5 className="fw-bold text-center text-white py-3">Projects</h5>
          <div className="card-holder">
            <div className="row  px-md-0 mx-auto">
              <div
                className="project p-0 me-5 border bg-primarys col-md-3 rounded"
                style={{ overflowX: "hidden", objectFit: "cover" }}
              >
                <a href="https://wholelight.vercel.app">
                  <img
                    src={img2}
                    alt="project1"
                    className="w-100 p-0"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </a>
              </div>
              <div
                className="project ms-md-5 mt-3 mt-md-0 p-0 border bg-primarys col-md-3 me-5 rounded"
                style={{ overflowX: "hidden" }}
              >
                <a href="https://printbaseweb.vercel.app">
                  <img src={img4} alt="project1" style={{ width: "105%" }} />
                </a>
              </div>
              <div
                className="project ms-md-5 mt-3 mt-md-0 p-0 border bg-primarys col-md-3 rounded"
                style={{ overflowX: "hidden" }}
              >
                <img src={cryptoo} alt="project1" style={{ width: "105%" }} />
              </div>
              <div
                className="project mt-3 mt-md-4 p-0 me-5 border bg-primarys col-md-3 rounded mt-4"
                style={{ overflowX: "hidden" }}
              >
                <img src={carrental} alt="project1" style={{ width: "105%" }} />
              </div>
              <div
                className="project ms-md-5 mt-3 mt-md-4 p-0 me-5 border bg-primarys col-md-3 rounded mt-4"
                style={{ overflowX: "hidden" }}
              >
                <img src={jobite} alt="project1" style={{ width: "105%" }} />
              </div>
              <div
                className="project ms-md-5 mt-3 mt-md-4 p-0 me-5 border bg-primarys col-md-3 align-items-center rounded mt-4"
                style={{ overflowX: "hidden" }}
              >
                <img src={carrental} alt="project1" style={{ width: "105%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-sections text-white  py-5"
        id="about"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* <div
                className="p-2 border d-flex justify-content-center align-items-center rounded"
                style={{ height: 200 }}
              >
                <img src={code} alt="project1" style={{ width: "30%" }} />
              </div> */}
              <div
                className="border d-flex justify-content-center align-items-center rounded"
                // style={{ height: 200 }}
              >
                <img
                  src={code}
                  alt="project1"
                  className="img-fluid rounded"
                  // style={{ width: "30%" }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <h5 className="fw-bold mt-4 mt-md-0">About</h5>
              <div className="row">
                <div className="col-md-8 ps-5">
                  <p>
                    I'm a Full Stack Engineer specializing in React, Node.js,
                    Flask, Express.js, Django, and Python. With years of
                    experience building scalable applications, I pride myself on
                    writing clean, efficient code and working collaboratively
                    with teams. Let's build something great together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
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
      </section> */}
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
                <form
                  className="was-validated"
                  // action="https://emailbackend.vercel.app/send-mail"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="form-control mt-3"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control my-4"
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    className="form-control"
                    id="validationServer01"
                    type="text"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-danger my-4 "
                      type="submit"
                      onClick={() => console.log("formData")}
                    >
                      Submit
                    </button>
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
              <a href="http://www.linkedin.com/in/ephraimmatarutse">
                <i className="fa fa-linkedin me-4 text-white"></i>
              </a>
              <a href="https://github.com/dopswae98">
                <i className="fa fa-github me-4 text-white"></i>
              </a>
              <a href="https://www.facebook.com/ephraim.matarutse">
                <i className="fa fa-facebook text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UXPortifolio;
