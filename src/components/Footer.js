import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/groups/1079568898757335/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/churchofascension19?igsh=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <YouTubeIcon />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 El-Visinho Production</p>
    </div>
  );
};

export default Footer
