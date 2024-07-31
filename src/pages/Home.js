import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BibleImage2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <p> <b>WELCOME TO THE ANGLICAN CHURCH OF THE ASCENSION</b> </p>
        <p> where we ascend and ascend and ascend till we meet with our Father in heaven...</p>
        <Link to="/programs">
          <button> VIEW OUR PROGRAMS </button>
        </Link>
        <div className="fancyText">
          <p className="">And don't forget to drop your prayer points through the form on the Contact Page. We would love to pray with you and God bless you as you do so... AMEN!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
