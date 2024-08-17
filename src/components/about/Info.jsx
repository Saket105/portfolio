import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineTerminal,
  HiOutlineSparkles,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years</span>
      </div>
      <div className="about__box">
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Personal Projects</span>
      </div>
      <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">Current Organization</h3>
        <span className="about__subtitle">Worked as a fullstack developer</span>
      </div>
      {/* <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div> */}
    </div>
  );
};

export default Info;
