import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { fromJSON } from "postcss";

function Footer() {
  const Public_key = "-dLEA-NeOMhKJjodv";
  const Service_key = "service_5o9jdpe";
  const Template_id = "template_q4g8c0h";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const tempateParam = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "anshulshrivas2002@gmail.com",
      to_name: "Anshul Shrivas",
    };

    emailjs
      .send(Service_key, Template_id, tempateParam, {
        publicKey: Public_key,
      })
      .then(
        () => {
          console.log("SUCCESS!");

          alert("Message sent successfully!");

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };
  return (
    <footer className="footer bg-base-200 text-base-content align-baseline mt-5 p-10">
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a href="/cart" className="link link-hover">
          Cart
        </a>
      </nav>

      <form onSubmit={sendEmail}>
        <h6 className="footer-title">Connect With Us !</h6>
        <fieldset className="form-control w-full">
          <label className="label">
            <span className="label-text">Enter your Name</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your name"
              name="from_name"
              className="input input-bordered join-item w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                onChange={(e) => setEmail(e.target.value)}
                name="from_email"
                className="input input-bordered join-item w-full"
              />
            </div>
          </fieldset>
        </fieldset>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <div className="join">
            <input
              type="textarea"
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="input input-bordered join-item w-full"
            />
          </div>
        </fieldset>
        <button className="btn btn-primary join-item ">Subscribe</button>
      </form>
    </footer>
  );
}

export default Footer;

// service_5o9jdpe
