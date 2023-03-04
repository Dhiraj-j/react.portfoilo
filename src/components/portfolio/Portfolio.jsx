import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Portfolio() {
  const [item, setItem] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category.toLowerCase() === categoryItem.toLowerCase();
    });
    setItem(updatedItems);
  };

  return (
    <section className="work container section">
      <h2 className="section_title">Recent Work</h2>

      <div className="work_filters" id="portfolio">
        <span className="work_item" onClick={() => setItem(Menu)}>
          Everything
        </span>
        <span className="work_item" onClick={() => filterItem("WebApp")}>
          Web App
        </span>
        <span className="work_item" onClick={() => filterItem("MobileApp")}>
          Mobile App
        </span>
      </div>
      <div className="work_container grid">
        <AnimatePresence>
          {item.map((elem) => {
            const { id, image, title, category, liveLink, git, video } = elem;
            return (
              <motion.div
                className="work_card"
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                key={id}
              >
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />
                  <div className="work_mask"></div>
                </div>
                <span className="work_category">{category}</span>
                <h3 className="work_title">{title}</h3>

                <a href={liveLink} className="work_button">
                  <i className="icon-link work_button-icon"></i>
                </a>
                {elem.git && (
                  <a href={git} className="work_button-2">
                    <i className="fa-brands fa-github work_button-icon"></i>
                  </a>
                )}
                {elem.video && (
                  <a href={video} className="work_button-3">
                    <i className="fa-brands fa-youtube work_button-icon"></i>
                  </a>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Portfolio;
