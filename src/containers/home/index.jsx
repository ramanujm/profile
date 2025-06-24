import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleHireMe = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__container_wrapper">
        <h1>
          Hello, I'm RAMANUJ
          <br /> A passionate full stack developer with
          <br />a love for creating innovative solutions.
        </h1>
      </div>
      <div className="home__contactMe">
        <button onClick={handleHireMe}>Hire Me</button>
      </div>
    </section>
  );
};

export default Home;
