import { Button } from "@mui/material";
import React from "react";
import "./css/CommunityCard.css";

export const CommunityCard = () => {
  return (
    <div
      className="coverCard"
      style={{
        margin: "auto",
        width: "80%",
        marginBottom: "10px",
        padding: "5px",
      }}
    >
      <div style={{ margin: "auto", display: "flex" }} className="row">
        <div style={{ marginRight: "4%" }}>
          <img
            className="img-sugg"
            src={
              "https://png.pngtree.com/png-clipart/20200701/original/pngtree-hacker-programming-flat-clipart-illustration-png-image_5388978.jpg"
            }
            alt="#"
          />
        </div>
        <div style={{ margin: "4px", marginRight: "10%" }}>
          <div className="sug-name">Community Name</div>
          <div className="sug-username">Community For Fun</div>
          <div className="sug-similarity">1k Members</div>
        </div>
        <Button variant="outlined" style={{ height: "70%", marginTop: "10px" }}>
          Joined
        </Button>
      </div>
    </div>
  );
};
