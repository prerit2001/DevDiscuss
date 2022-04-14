import React from "react";
import "./css/Landing.css";
import CPVSDEV from "../../Images/CP-VS-Dev.png";
import SoftwareDevelopement from "../../Images/SoftwareDevelopement.png";
import OpenSource from "../../Images/OpenSource.png";
import Typewriter from "typewriter-effect";
import Discussion from "../../Images/Discussion.png";

export const Landing = () => {
  const FeaturedCommunity = (community) => {
    return (
      <div className="CommunityBox">
        <div style={{ textAlign: "center" }}>
          <img
            src={community.data.Pic}
            alt={community.data.Topic}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <h2>
          <b>{community.data.Topic}</b>
        </h2>
      </div>
    );
  };

  const community1 = {
    Topic: "CP V/S Dev",
    Pic: CPVSDEV,
    Description:
      "Which is better to invest time in: competitive programming (algorithmic programming) vs. software development (app/web dev etc.)? Why?",
  };

  const community2 = {
    Topic: "Developer",
    Pic: SoftwareDevelopement,
    Description:
      "Software Developement channels comprises of engagement among developers in developing computer softwares.",
  };

  const community3 = {
    Topic: "Open-Source",
    Pic: OpenSource,
    Description:
      "Open source communities bring people with shared interests together to collaboratively build something, which is public.",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="LandingBG">
        <div className="LandingText">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, What can we help you find?")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Share and grow the worlds knowledge!")
                .start();
            }}
          />
          <br />
          <div>
            <button class="buttonExplore">Explore</button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "7%", marginRight: "7%", marginTop: "2%" }}>
        <div className="HeadingManrope">
          <b>Featured Community</b>
        </div>
        <div className="CommunityContainer">
          <FeaturedCommunity data={community1} style={{ margin: "15%" }} />
          <FeaturedCommunity data={community2} style={{ margin: "15%" }} />
          <FeaturedCommunity data={community3} style={{ margin: "15%" }} />
        </div>
      </div>
      <div className="CoverDiscussion">
        <div>
          <img src={Discussion} className="LeftHalfDiscussion" alt="#"></img>
        </div>
        <div className="RightHalfDiscussion">
          A public platform building the definitive collection of tech questions
          & answers
          <div style={{ fontSize: "20px", marginTop: "20px" }}>
            Your 360-Patner
          </div>
        </div>
      </div>
    </div>
  );
};
