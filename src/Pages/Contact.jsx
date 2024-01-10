import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    Fullname: "",
    Password: "",
    Email: "",
    Mobile: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;


    setData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  return (
   
      <section className="contact" id="contact">
        <h1 className="contact-heading">
          Contact <span style={{ color: "#0ef" }}>Us</span>{" "}
        </h1>
        <div className="contact-grid">
          {/* <p>{data.Fullname} </p>
          <p>{data.Password} </p>
          <p>{data.Email} </p>
          <p>{data.Mobile} </p> */}

          <div className="contact-left">
            <input
              type="text"
              placeholder="Fullname"
              name="Fullname"
              onChange={handleChange}
              value={data.Fullname}
            />
            <input
              type="text"
              placeholder="Password"
              name="Password"
              onChange={handleChange}
              value={data.Password}
            />
          </div>
          <div className="contact-right">
            <input
              type="text"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
              value={data.Email}
            />
            <input
              type="text"
              placeholder="Mobile no"
              name="Mobile"
              onChange={handleChange}
              value={data.Mobile}
            />
          </div>
        </div>

        <div className="contact-bottom" >
          <textarea name="text" id="" cols="30" rows="10" placeholder="message" ></textarea>
          <button className="btn">Send message</button>
        </div>
      </section>
   
  );
};

export default Contact;