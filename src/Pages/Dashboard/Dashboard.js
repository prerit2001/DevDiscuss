import React from "react";
import { useState, useEffect } from "react";
import { CommunityCard } from "./CommunityCard";
import "./css/Dashboard.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const Dashboard = () => {
  const { height, width } = useWindowDimensions();

  const MyCommunity = () => {
    return (
      <div style={{ padding: ".5%" }}>
        <div className="seven">
          <h2>My Community</h2>
          <hr
            style={{
              backgroundColor: "#fff",
              borderTop: "2px dashed #8c8b8b",
              width: "70%",
            }}
          />
        </div>
        <div className="CoverCommunityCard">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    );
  };

  const FavorityCommunity = () => {
    return (
      <div style={{ padding: ".5%" }}>
        <div className="seven">
          <h2>Favorite Community</h2>
          <hr
            style={{
              backgroundColor: "#fff",
              borderTop: "2px dashed #8c8b8b",
              width: "70%",
            }}
          />
        </div>
        <div className="CoverCommunityCard">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", display: "flex" }}>
      <div
        style={{
          height: height - 120,
          width: "70%",
          // border: "2px solid black",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          margin: "1%",
        }}
      >
        {" "}
      </div>
      <div
        style={{
          height: height - 120,
          width: "26%",
        }}
      >
        <div
          style={{
            height: "48%",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            marginBottom: "6%",
            marginTop: "4%",
          }}
        >
          <FavorityCommunity />
        </div>
        <div
          style={{
            height: "48%",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <MyCommunity />
        </div>
      </div>
    </div>
  );
};
