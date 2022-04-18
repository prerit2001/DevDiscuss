import React from "react";
import "./css/ThreadCard.css";

export const ThreadCard = (props) => {
  const description = props.question;

  return (
    <div>
      <div className="ThreadContainer">
        <div className="Question">{props.title}</div>
        <div className="ThreadCommunity">📦 {props.community}</div>
        <div className="ThreadDescription">{description.slice(0, 150)} ...</div>
        <div className="ThreadTag">#texas #intership #student</div>
      </div>
    </div>
  );
};
