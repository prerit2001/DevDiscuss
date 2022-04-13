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

  const Threads = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const RowData = () => {
      return (
        <div style={{ display: "flex", padding: "10px" }}>
          <div style={{ width: "70%", textAlign: "left", fontSize: "30px" }}>
            {" "}
            <ThreadCard />
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
            <div style={{ fontSize: "20px" }}>↩ 53</div>
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
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
          <div onClick={(e) => navigate("/threads/1")}>
            <RowData />
          </div>
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
