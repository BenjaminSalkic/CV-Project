import React from "react";
import './index.css';
import Insta from '../../assets/img/insta.svg';
import Mail from '../../assets/img/mail.svg';
import Linked from '../../assets/img/linked.svg';
import Face from '../../assets/img/face.svg';

const Contact = () =>{
    return(
        <section>
        <div className="contact-text">
          <h1>Would love to work on your projects</h1>
          <h3>Let's get started</h3>
          <div className="contact-btn">CONTACT ME!</div>
        </div>
        <div className="logos">
          <div className="logo">
            <img src={Linked} alt="" />
          </div>
          <div className="logo">
            <img src={Mail} alt="" />
          </div>
          <div className="logo">
            <img src={Insta} alt="insta" />
          </div>
          <div className="logo">
            <img src={Face} alt="" />
          </div>
        </div>
      </section>
    );
    
};

export default Contact;