import React from "react";
import { useState, useEffect } from "react";
import { CommunityCard } from "./CommunityCard";
import "./css/Dashboard.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ThreadCard } from "./ThreadCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();
  const [Community, setCommunity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/community")
      .then((data) => {
        // setCommunity(data);
        var arr = [];
        data.data.forEach((element) => {
          element.Threads.forEach((elem) => {
            arr.push(elem);
          });
        });
        setCommunity(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const MyCommunity = () => {
    return (
      <div style={{ padding: ".5%" }}>
        <div className="seven">
          <h2>My Community</h2>
          <Button
            endIcon={<AddBoxIcon />}
            style={{ transform: "translateY(-15px)" }}
            variant="contained"
          >
            Create
          </Button>
        </div>
        <div
          className="CoverCommunityCard"
          style={{ transform: "translateY(-15px)" }}
        >
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

  const ThreadCardTemprorary = () => {
    const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    return (
      <div>
        <div className="ThreadContainer">
          <div className="Question">
            My Internship experience with Texas Instruments
          </div>
          <div className="ThreadCommunity">???? Texas Instruments</div>
          <div className="ThreadDescription">
            {description.slice(0, 150)} ...
          </div>
          <div className="ThreadTag">#texas #intership #student</div>
        </div>
      </div>
    );
  };

  const Threads = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const RowData = (item) => {
      console.log(item);
      return (
        <div style={{ display: "flex", padding: "10px" }}>
          <div style={{ width: "70%", textAlign: "left", fontSize: "30px" }}>
            {" "}
            <ThreadCard {...item} />
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
            <div style={{ fontSize: "20px" }}>??? 1k</div>
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
            <div style={{ fontSize: "20px" }}>???? 1M</div>
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
            <div style={{ fontSize: "20px" }}>??? {item.comments.length}</div>
          </div>
        </div>
      );
    };

    return (
      <div style={{ display: "block" }}>
        <div style={{ display: "flex", padding: "10px" }}>
          <div style={{ width: "70%", textAlign: "left", fontSize: "30px" }}>
            {" "}
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">
                <FilterAltIcon />
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>My Threads</MenuItem>
                <MenuItem value={20}>Favorite Threads</MenuItem>
                <MenuItem value={30}>Latest Threads</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ width: "10%" }}>
            <div style={{ fontSize: "20px" }}>{width > 1100 && "Upvotes"}</div>
          </div>
          <div style={{ width: "10%" }}>
            {" "}
            <div style={{ fontSize: "20px" }}>{width > 1100 && "Views"}</div>
          </div>
          <div style={{ width: "10%" }}>
            {" "}
            <div style={{ fontSize: "20px" }}>{width > 1100 && "Replies"}</div>
          </div>
        </div>
        <div className="RowCover" style={{ height: height - 230 }}>
          {Community.map((item) => {
            return (
              <div
                onClick={(e) =>
                  navigate("/threads/" + item.id, { state: item })
                }
              >
                <RowData {...item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const PhoneViewport = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            height: height - 120,
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
        <div
          style={{
            height: height - 120,
            // border: "2px solid black",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            margin: "1%",
          }}
        >
          {" "}
          <Threads />
        </div>
      </div>
    );
  };

  const DesktopViewport = () => {
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
          <Threads />
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

  return <div>{width < 1100 ? <PhoneViewport /> : <DesktopViewport />}</div>;
};
