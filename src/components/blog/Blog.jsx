import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
function Blog() {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section_title">Blogs</h2>

      <div className="blog_container grid">
        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#Demoblog">
              {" "}
              <span className="blog_category">Tech</span>{" "}
            </a>
            <a href="https://dhirajjaiswal.hashnode.dev/how-to-create-own-radio-button-in-react-native">
              <img src={Image1} alt="" className="blog_img" />
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">
              How To Create Radio Button In react-native
            </h3>
            <div className="blog_meta">
              <span>02 february, 2022</span>
              <span className="blog_dot">.</span>
              <span>Dhiraj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
