import React from "react";
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  FaDev,
  FaConfluence,
  FaJira,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import {
  DiAngularSimple,
  DiAndroid,
  DiApple,
  DiReact,
  DiBitbucket,
  DiGithubBadge,
  DiNodejsSmall,
  DiVisualstudio,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineJava } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import intellij from "./../../assets/images/intellij.svg";
import swaggerhub from "./../../assets/images/swagger.png";
import hibernate from "./../../assets/images/hibernate.png";
import oracle from "./../../assets/images/oracle.png";
import mongodb from "./../../assets/images/mongodb.png";
import sqldb from "./../../assets/images/SQL_Database.png";
import kafka from "./../../assets/images/Apache Kafka.png";
import swift from "./../../assets/images/Swift.png";

const personalInfo = [
  {
    label: "Name",
    value: "Ramanuj Mishra",
  },
  {
    label: "Email",
    value: "mishra.ramanuj@gmail.com",
  },
];

const aboutText = `
I’m a passionate and results-driven Full Stack Developer with over 14 years of experience designing and delivering enterprise-grade applications. I specialize in Java, Spring Boot, Angular, React, Struts2, Hibernate, oracle and Mongodb, and have a proven track record of turning complex business requirements into scalable, maintainable software solutions.

Throughout my career, I’ve worked across the entire SDLC - from architecture and development to deployment and post-release support. I’ve led teams, collaborated with cross-functional stakeholders, and consistently delivered high-quality systems in fast-paced, client-facing environments.

What sets me apart is my ability to balance deep technical expertise with strong communication and leadership skills. I enjoy mentoring junior developers, driving technical decisions, and fostering a team culture centered around collaboration, innovation, and continuous learning.
My core strength's are:`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          {/* <h3>Full stack developer</h3> */}
          <p>
            {aboutText}
            <ul style={{ marginTop: "10px" }}>
              <li>
                - Full-stack development with Angular or React & Spring Boot
              </li>
              <li>- Scalable API and microservice design</li>
              <li>- Agile methodologies & DevOps integration</li>
              <li>- Leading teams & managing client relationships</li>
              <li>- Focus on clean code, performance, and security</li>
            </ul>
            Let’s connect - whether you're building something exciting, solving
            a tough problem, or just want to talk tech.
          </p>

          <h3 className="personalInfoHeaderText">Personal Information</h3>
          <ul>
            {personalInfo.map((info, index) => (
              <li key={index}>
                <span className="title">{info.label}:</span>
                <span className="value"> {info.value}</span>
              </li>
            ))}
          </ul>
          <div className="about__content__personalWrapper__socialMedia">
            <div>
              <FaFacebook size={30} color="#3B5998" />
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mishraramanuj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} color="#0077B5" />
              </a>
            </div>
            <div>
              <FaGithub size={30} color="#181717" />
              {/* <a
                href="https://github.com/ramanujm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} color="#181717" />
              </a> */}
            </div>
            <div>
              <FaTwitter size={30} color="#1DA1F2" />
            </div>
          </div>
        </div>
        <div className="about__content__servicesWrapper">
          <h3>Tools and Technologies</h3>
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev
                size={60}
                color="#669bbc"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <DiAngularSimple
                size={60}
                color="#c3002f"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <DiAndroid
                size={60}
                color="#a5be00"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <DiReact
                size={60}
                color="#61DAFB"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <img
                src={kafka}
                alt="Apachi Kafka"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <SiSpringboot
                size={60}
                color="#6DB33F"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <img
                src={swift}
                alt="Swift"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <AiOutlineJava
                size={60}
                color="#f89820"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <DiBitbucket
                size={60}
                color="#205081"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <DiGithubBadge
                size={60}
                color="#253858"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>

            <div>
              <BiLogoSpringBoot
                size={60}
                color="#329453"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <DiVisualstudio
                size={60}
                color="#2684ff"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <DiNodejsSmall
                size={60}
                color="#a7c957"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <DiHtml5
                size={60}
                color="#F06529"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <DiCss3
                size={60}
                color="#E34C26"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <FaConfluence
                size={60}
                color="#2684ff"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <FaJira
                size={60}
                color="#2684ff"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <img
                src={intellij}
                alt="intellij"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <img
                src={swaggerhub}
                alt="swaggerhub"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <IoLogoJavascript
                size={60}
                color="#F7DF1E"
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <img
                src={hibernate}
                alt="hibernate"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <img
                src={oracle}
                alt="oracle"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <img
                src={sqldb}
                alt="mssql"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
            <div>
              <img
                src={mongodb}
                alt="mongodb"
                height={60}
                width={60}
                className="about__content__servicesWrapper__innerContent__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
