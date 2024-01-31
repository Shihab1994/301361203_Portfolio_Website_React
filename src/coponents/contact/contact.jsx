/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mrdblar",
      "template_xxfnqrh",
      form.current,
      "l12GZPijdMofD6o-a"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a href="mailto:mahfuzulislam15@gmail.com" target="_blank">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>mahfuzulislam15@gmail.com</h5>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <a href="https://m.me/Shihab96/" target="_blank">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Facebook</h5>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <a
              href="https://api.whatsapp.com/send?phone=14164588366"
              target="_blank"
            >
              <FaWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+14164588366</h5>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
