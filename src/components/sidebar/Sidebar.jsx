import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";

const navData = [
  { id: 1, title: "Home", link: "#home", icon: "icon-home" },
  { id: 2, title: "About", link: "#about", icon: "icon-user-following" },
  { id: 3, title: "Services", link: "#services", icon: "icon-briefcase" },
  { id: 4, title: "Resume", link: "#resume", icon: "icon-graduation" },
  { id: 5, title: "Portfolio", link: "#portfolio", icon: "icon-layers" },
  { id: 7, title: "Blog", link: "#blog", icon: "icon-note" },
  { id: 8, title: "Contact", link: "#contact", icon: "icon-bubble" },
];

function Sidebar() {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="LOGO" />
        </a>
        <nav className="nav">
          <div className="nav_menu">
            <div className="nav_list">
              {navData.map((item) => {
                return (
                  <div key={item.id} className="nav_item">
                    <a href={item.link} className="nav_link">
                      <i className={item.icon}></i>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">&copy; 2022-2023.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
}

export default Sidebar;
