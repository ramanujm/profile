import React from "react";
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  FaDatabase,
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

const personalInfo = [
  {
    label: "Name",
    value: "Ramanuj Mishra",
  },
  {
    label: "Email",
    value: "mishra.ramanuj@gmail.com",
  },
  {
    label: "Org.    ",
    value: "SR Software Solutions.inc",
  },
  {
    label: "Email",
    value: "srsoftware.inc@gmail.com",
  },
];

const aboutText =
  "I am Full stack developer with over 14+ years of experience in various areas of software development and IT technologies. Specialized in Angular, Java, Spring Boot, Struts2, Hibernate, Spring MVC, Oracle. Enthusiastic, self-motivated, ability to work in a team, manage a group of people, manage projects and clients, develop and implement new software codes, cope well within a fast-paced setting, communicate effectively at all levels, and interact supportive within a team environment.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Full stack developer</h3>
          <p>{aboutText}</p>

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
              <a
                href="https://www.facebook.com/ramanuj.mishra.18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} color="#3B5998" />
              </a>
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
              <a
                href="https://github.com/ramanujm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} color="#181717" />
              </a>
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
              <FaDatabase
                size={60}
                color="#8d99ae"
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
              <DiApple
                size={60}
                color="#A2AAAD "
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
