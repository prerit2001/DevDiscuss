import React from "react";
import "./css/ErrorFallbackUI.css";
import errorExclamation from "./../../Images/ErrorExclamation.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const ErrorFallbackUI = (props) => {
  const navigate = useNavigate();

  return (
    <div className="errorCover">
      <div className="errorContainer">
        <img
          src={errorExclamation}
          id="errorStaticImage"
          alt="1"
          style={{ height: "10rem" }}
        />
        <h2>Something went wrong !!!</h2>
        <details style={{ fontSize: "14px", color: "red" }}>
          {props.error && props.error.toString()}
        </details>
        <br />
        <br />
        <div>
          App has encountered as error. If this problem persists, contact us at
          help@discuss.dev.
        </div>
        <br />
        <br />
        <Button variant="outlined" onClick={(e) => navigate("/")}>
          <b>Back to Home</b>
        </Button>
      </div>
    </div>
  );
};
