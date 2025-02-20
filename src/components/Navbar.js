import React, { useState } from 'react';
import Logo from "../assets/Ascension.jpg";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    const closeNavbar = () => {
      setOpenLinks(false);
    }

return (
  <div className='navbar'>
    <div className='leftSide'>
      <img src={Logo} alt='Church Logo' />
      <h1>The Church of Nigeria (Anglican Communion)</h1>
    </div>
    <div className='rightSide'>
      <div className={`links ${openLinks ? "open" : ""}`}>
        <Link to="/" onClick={closeNavbar}>Home</Link>
        <Link to="/programs" onClick={closeNavbar}>Programs</Link>
        <Link to="/about" onClick={closeNavbar}>About Us</Link>
        <Link to="/contact" onClick={closeNavbar}>Contact</Link>
      </div>
      <button onClick={toggleNavbar}>
        <ReorderIcon />
      </button>
    </div>
  </div>
);
}

export default Navbar
