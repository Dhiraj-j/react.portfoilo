import React from "react";

function AboutBox() {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about_tittle">10+</h3>
          <span className="about_subtittle">project completed</span>
        </div>
      </div>
      <div className="about_box">
        <i className="about_icon fa-solid fa-calendar-days"></i>
        <div>
          <h3 className="about_tittle">6+</h3>
          <span className="about_subtittle">months of experience</span>
        </div>
      </div>
      <div className="about_box">
        <i className="about_icon fa-solid fa-laptop-code"></i>
        <div>
          <h3 className="about_tittle">100+</h3>
          <span className="about_subtittle">DSA Questions</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
