import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <div className="contact-links">
            <p>
              <EmailIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <a href="mailto:nrityya2003@gmail.com" target="_blank" rel="noreferrer">
                nrityya2003@gmail.com
              </a>
            </p>

            <p>
              <LinkedInIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <a href="https://www.linkedin.com/in/nrityya-sivakumar-annu/" target="_blank" rel="noreferrer">
                linkedin.com/in/nrityya-sivakumar-annu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
