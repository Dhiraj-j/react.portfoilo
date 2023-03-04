import React from "react";
import "./about.css";
import aboutImg from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
function About() {
  return (
    <section id="about" className="about container section">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={aboutImg} alt="aboutImage" className="about_img" />

        <div className="about_data  grid">
          <div className="about_info">
            <p className="about_description">
              I am a driven and motivated individual with a passion for web
              development. Currently, I am working as an react native intern at
              Sixpep and am a final-year student pursuing my Master's in
              Computer Applications.
              <br />
              I have done multiple projects for both Mobile apps and web apps.
              also able to solve 100+ data structure questions in leetcode and
              geeks for geeks website.
              <br />I am committed to continuously improving my skills and
              expanding my knowledge in the field of development. I am excited
              to apply my expertise to new challenges and projects.
            </p>
            <a href="#profile" className="btn">
              Download CV
            </a>
          </div>
          {/* <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_tittles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number ">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_tittles">
                <h3 className="skills_name">UI UX design</h3>
                <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_tittles">
                <h3 className="skills_name">Photography</h3>
                <span className="skills_number ">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage Photography"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
