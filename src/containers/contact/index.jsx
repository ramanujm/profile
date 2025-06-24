import React, { useRef } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";
import emailjs from "@emailjs/browser";



const Contact = () => {
  const form = useRef();
// Replace with your EmailJS service ID, template ID, and public key
  const YOUR_SERVICE_ID = "service_3yvxm0u"; // Replace with your EmailJS service ID
  const YOUR_TEMPLATE_ID = "template_1trkrij"; // Replace with your EmailJS template ID
  const YOUR_PUBLIC_KEY = "e936Lf3I6amsoEW12"; // Replace with your EmailJS public key
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Get in Touch</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="10"
                />
                <label htmlFor="message" className="descriptionLabel">
                  Message
                </label>
              </div>
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
