import React, { useState } from "react";
import "./services.css";
import {
  HiOutlineClipboardList,
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Create + Collaborate</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Web + App
              <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Over 3 years of experience in web development providing quality
                work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Web page and app development
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Integrate creative colloboration
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Provide product mockups
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Backend
              <br />
              Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Development</h3>
              <p className="services__modal-description">
                Over 2 years of experience in Backend development providing
                quality work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Tech used for backend development{" "}
                    <strong>
                      {" "}
                      Java, SpringBoot, PostgreSQL, MySQL, Kafka, JUnit,
                      Cucumber, Mockito, gRPC, Jenkins, GitHub, MicroServices
                    </strong>
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Use indexing, caching, and efficient query structures to
                    minimize database load and improve response times.
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Ensure robust error handling and detailed logging to quickly
                    identify and resolve issues, enhancing code reliability.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Frontend
              <br />
              Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Development</h3>
              <p className="services__modal-description">
                Over 2 years of experience in Frontend development delivering
                high-quality user interfaces.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Tech used for frontend development{" "}
                    <strong>
                      {" "}
                      Angular, React, HTML, CSS, JavaScript, TypeScript,
                      Bootstrap, SASS, Webpack, NPM, REST APIs, GitHub.
                    </strong>
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Create responsive and intuitive user interfaces that enhance
                    user experience across devices.
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implement modular and reusable components to improve
                    maintainability and scalability.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
