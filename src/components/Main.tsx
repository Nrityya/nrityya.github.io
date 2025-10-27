import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I am Nrityya Sivakumar Annu</h1>
          <p>MS in Computer Science @ University of Texas at Dallas</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nrityya" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nrityya-sivakumar-annu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;