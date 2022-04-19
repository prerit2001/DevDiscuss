import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bg from "./../../Images/BlackBackground.png";
import { ThreadCard } from "./../Dashboard/ThreadCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const useStyles = makeStyles({
  CommunityExpandedCover: {
    display: "flex",
    margin: "2%",
    marginTop: "7%",
    ["@media (max-width:1000px)"]: {
      display: "inline-block",
    },
  },
  CommunityExpandedLeftHalf: {
    width: "35%",
    display: "block",
    position: "fixed",
    boxShadow:
      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
    borderRadius: "20px",
    padding: "3%",
    paddingBottom: "5%",
    textAlign: "center",
    background: `url(${Bg}) no-repeat center`,
    backgroundSize: "cover",
    color: "#fff",
    ["@media (max-width:1000px)"]: {
      width: "95%",
      position: "static",
    },
  },
  CommunityExpandedRightHalf: {
    width: "100%",
    marginLeft: "43%",
    ["@media (max-width:1000px)"]: {
      marginLeft: "0%",
    },
  },
});

export const CommunityExpanded = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    CommunityExpandedCover,
    CommunityExpandedLeftHalf,
    CommunityExpandedRightHalf,
  } = classes;

  const RowData = (props) => {
    return (
      <div style={{ display: "flex", padding: "10px" }}>
        <div style={{ width: "70%", textAlign: "left", fontSize: "30px" }}>
          {" "}
          <ThreadCard {...props} />
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "#868686",
          }}
        >
          <div style={{ fontSize: "20px" }}>△ 1k</div>
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "#868686",
          }}
        >
          {" "}
          <div style={{ fontSize: "20px" }}>👁 1M</div>
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "#868686",
          }}
        >
          {" "}
          <div style={{ fontSize: "20px" }}>↩ {props.comments.length}</div>
        </div>
      </div>
    );
  };

  const [communityData, setcommunityData] = useState({
    data: { Users: [], Threads: [] },
  });

  const [threadData, setthreadData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000" + window.location.pathname)
      .then((data) => {
        setcommunityData(data);
        setthreadData(data.data.Threads);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className={CommunityExpandedCover}>
        <div className={CommunityExpandedLeftHalf}>
          <div style={{ overflowY: "scroll" }}>
            <div style={{ fontSize: "2.8rem", marginBottom: "5%" }}>
              {communityData.data.title}
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "2%" }}>
                <img
                  className="img-sugg"
                  src={
                    "https://png.pngtree.com/png-clipart/20200701/original/pngtree-hacker-programming-flat-clipart-illustration-png-image_5388978.jpg"
                  }
                  alt="#"
                />
              </div>
              <div style={{ margin: "4px", marginTop: "1%" }}>
                <div className="sug-name" style={{ color: "#fff" }}>
                  Author: Prerit Kumar Jha
                </div>
                <div className="sug-username" style={{ color: "#868686" }}>
                  13 April 2022 12:33
                </div>
              </div>
            </div>
            <div style={{ textAlign: "left", width: "90%" }}>
              {communityData.data.description}
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <Button
                style={{
                  color: "#fff",
                  border: "2px solid white",
                  borderRadius: "50px",
                  margin: "2%",
                }}
                variant="outlined"
              >
                90k 👍
              </Button>
              <Button
                style={{
                  color: "#fff",
                  border: "2px solid white",
                  borderRadius: "50px",
                  margin: "2%",
                }}
                variant="outlined"
              >
                {communityData.data.Threads.length} 📃
              </Button>
              <Button
                style={{
                  color: "#fff",
                  border: "2px solid white",
                  borderRadius: "50px",
                  margin: "2%",
                }}
                variant="outlined"
              >
                Taday, 14:15 ⏰
              </Button>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "2%" }}>
                <img
                  className="img-sugg"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNBkui91tHeQTd4TPJd8Aa7Llxv_sBJQgmA&usqp=CAU"
                  }
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "3.5px solid #f900bf",
                  }}
                  alt="#"
                />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img
                  className="img-sugg"
                  src={
                    "data:image/jpeg;base64,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"
                  }
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "3.5px solid #f900bf",
                  }}
                  alt="#"
                />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img
                  className="img-sugg"
                  src={
                    "data:image/jpeg;base64,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"
                  }
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "3.5px solid #f900bf",
                  }}
                  alt="#"
                />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img
                  className="img-sugg"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU"
                  }
                  alt="#"
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "3.5px solid #f900bf",
                  }}
                />
              </div>
              <div
                style={{
                  marginRight: "2%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {"+ "}
                {communityData.data.Users.length} more users
              </div>
            </div>
          </div>
        </div>
        <div className={CommunityExpandedRightHalf}>
          <Button
            variant="Contained"
            style={{
              borderRadius: 35,
              backgroundColor: "#f900bf",
              padding: "10px 30px 10px 25px",
              fontSize: "15px",
              color: "#fff",
              display: "block",
              marginRight: "0",
              marginLeft: "auto",
              textTransform: "capitalize",
              marginTop: "5px",
            }}
          >
            <AddBoxOutlinedIcon style={{ transform: "translateY(5px)" }} />
            ‏‏‎ ‎‏‏‎ ‎<b>{"New Thread"}</b>
          </Button>
          <div className="RowCover">
            <br />
            {threadData.map((thread) => {
              return (
                <div
                  onClick={(e) =>
                    navigate("/threads/" + thread.id, { state: thread })
                  }
                >
                  <RowData {...thread} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
