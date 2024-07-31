import React from "react";
import ChurchImage from "../assets/Church-photo.jpg";
import "../styles/About.css";
import LeaderItem from "../components/LeaderItem";
import { LeaderList } from "../helpers/LeaderList";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ChurchImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to the Anglican Church of the Ascension, where faith, hope,
          and love unite in a vibrant Anglican community. Our mission is to
          glorify God through passionate worship, faithful teaching of His Word,
          and acts of love and service. We invite you to join us in worship and
          experience the grace of God in a welcoming and supportive environment.
          Founded in ***, Anglican Church of the Ascension has been a beacon of
          hope and faith for over *** years. <br /> Our dedicated leadership
          team, led by Venerable Anthony Ajero, works tirelessly to guide our
          church in faith and service, fostering a sense of belonging and
          spiritual enrichment. We offer a blend of traditional and contemporary
          worship services, with Holy Communion celebrated on selected Sundays,
          alongside prayer meetings, Bible studies, and fellowship events.{" "}
          <br /> Connect with us at No. 19, Olaogun Street, off Odubiyi Street,
          Of Ashimowo Bakare Street, Ikate, Surulere, Lagos. You can also reach
          us on 080***** or Anglicanchurchoftheascension9@gmail.com, and follow
          us on social media to learn more and stay connected.
        </p>
      </div>
      <div className="program">
        <h1 className="menuTitle">
          <u>Our Leaders</u>
        </h1>
        <div className="programList">
          {LeaderList.map((leaderList, key) => {
            return (
              <LeaderItem
                image={leaderList.image}
                name={leaderList.name}
                title={leaderList.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
