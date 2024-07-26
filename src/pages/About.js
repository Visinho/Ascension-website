import React from "react";
import ChurchImage from "../assets/Church-photo.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ChurchImage})` }}
      >
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to the Anglican Church of the Ascension, where faith, hope,
          and love unite in a vibrant Anglican community. Our mission is to
          glorify God through passionate worship, faithful teaching of His Word,
          and acts of love and service. As a Bible-believing Anglican church, we
          hold the Holy Scriptures as the ultimate authority in matters of faith
          and practice. We affirm the Nicene Creed and are committed to the
          teachings of the Anglican Communion. We invite you to join us in
          worship and experience the grace of God in a welcoming and supportive
          environment. Founded in ***, Anglican Church of the Ascension has been
          a beacon of hope and faith for over *** years. <br/>From
          our humble beginnings, we have grown into a dynamic community
          dedicated to spiritual growth and outreach. Our dedicated leadership
          team, led by Venerable Anthony Ajero, works tirelessly to guide our
          church in faith and service, fostering a sense of belonging and
          spiritual enrichment. We offer a blend of traditional and contemporary
          worship services, with Holy Communion celebrated on selected Sundays,
          alongside prayer meetings, Bible studies, and fellowship events. <br />At
          Anglican Church of the Ascension, we are passionate about making a
          difference in our community through outreach programs, food drives,
          and mission trips. Our goal is to serve those in need and share the
          love of Christ with everyone we encounter. We invite you to become
          part of our church family, where you'll find a welcoming home and
          opportunities for spiritual growth and community involvement. <br /> Whether
          you're seeking deeper faith or meaningful connections, we welcome you
          to join us this Sunday. Connect with us at No. 19, Olaogun Street, off
          Odubiyi Street, Of Ashimowo Bakare Street, Ikate, Surulere, Lagos. You
          can also reach us on 080***** or
          Anglicanchurchoftheascension9@gmail.com, and follow us on social media
          to learn more and stay connected.
        </p>
      </div>
    </div>
  );
};

export default About;
