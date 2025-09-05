import React from "react";
import "./Contact.css";

const handleEmail = () => {
  window.open("mailto:owendewing7@gmail.com", "_blank");
};

const Contact = () => {
  return (
    <div id="contact" className="contactContainer">
      <div className="contact">
        <h1 className="contactMe">Contact Me</h1>
        <h2 className="contactInfo">
          Please contact me directly through{" "}
          <span onClick={handleEmail} className="emailLink">
            owendewing7@gmail.com
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
