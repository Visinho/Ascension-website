import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
        <p>&copy; 2024 El-Visinho Production</p>
    </div>
  )
}

export default Footer
