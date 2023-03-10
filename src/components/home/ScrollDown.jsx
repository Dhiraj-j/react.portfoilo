import React from "react";

function ScrollDown() {
  return (
    <div className="scroll_down">
      Scroll Down
      <a href="#about" className="mouse_wrapper">
        <span className="home_scroll-name"></span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
}

export default ScrollDown;
