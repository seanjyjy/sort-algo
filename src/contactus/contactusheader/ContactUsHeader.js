import React from 'react';
import Header from "../../component/header/SectionHeader"
import "./styles.css";

const ContactUsHeader = () => {
  const ContactUsText = () => (
    <span>
      Do contact us if there is any error or improvement or wish to collaborate on this project
    </span>
  );

  return (
    <div className="contact-us-header-box">
      <Header sectionHeader={'Contact Us'} translateX={'translateX(23px)'} />
      <ContactUsText />
    </div>
  );
};

export default ContactUsHeader;