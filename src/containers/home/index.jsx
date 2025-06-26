import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate("/contact");
  };

  const handleDownload = () => {
    const fileUrl = "./../../assets/resume/RamanujM.docx"; // if placed in /public/files folder

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "RamanujM.docx"; // rename the file if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="home" className="home">
        <div className="home__container_wrapper">
          <h1>Hello, I'm RAMANUJ</h1>
          <div style={{ color: "#fff", fontSize: "21px", padding: "0px 20px" }}>
            A passionate full-stack developer crafting innovative, scalable
            solutions that bridge user needs with cutting-edge technology.
          </div>
        </div>
        <div className="home__container_buttons">
          <div className="home__container_buttons__resume">
            <button onClick={handleDownload}>Download</button>
          </div>
          <div className="home__container_buttons__contactMe">
            <button onClick={handleHireMe}>Hire Me</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
