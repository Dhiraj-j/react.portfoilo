import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Avatar" className="home_img" />
        <h1 className="home_name">Dhiraj Jaiswal</h1>
        <span className="home_education">
          I am
          <span style={{ display: "flex" }}>
            &lt;
            <Typewriter
              options={{
                strings: [
                  " Software Developer ",
                  " Front-End Developer ",
                  " Mobile-App Developer ",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            /&gt;
          </span>
        </span>
        <HeaderSocial />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}

export default Home;
