import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o2tahih", "template_sbubebn", form.current, {
        publicKey: "E8bdsLF2KmXty7WOd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Email sent successfully🎉");
          form.current.reset(); // Clear the form fields after sending
        },
        (error) => {
          toast("Something went wrong plese try again");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact-heading">
        Connect with <span style={{ color: "#0ef" }}>Me</span>{" "}
      </h1>
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-grid">
          <div className="contact-left">
            <input type="text" placeholder="Fullname" name="user_name" />
          </div>
          <div className="contact-right">
            <input type="email" placeholder="Your Email" name="user_email" />
          </div>
        </div>

        <div className="contact-bottom">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <button className="btn" type="submit" value="send">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
