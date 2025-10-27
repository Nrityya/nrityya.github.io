import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <p> © {new Date().getFullYear()} Nrityya Sivakumar Annu — Design inspired by Yuji Sato. </p>
    </footer>
  );
}

export default Footer;