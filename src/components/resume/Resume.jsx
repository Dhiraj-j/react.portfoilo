import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";
function Resume() {
  return (
    <section id="resume" className="resume container section">
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
