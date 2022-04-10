import React from "react";
import { styled, alpha } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import "./css/Navbar.css";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export const Navbar = () => {
  const path = window.location.pathname;
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "80px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar
            style={{ height: "80px", background: "#fff", color: "#000" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className="appName" onClick={(e) => navigate("/")}>
                DevDiscuss
              </div>
            </Typography>
            <Search className="searchShadow">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Topics or #tags"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {path === "/community" ? (
              <div
                style={{
                  display: "flex",
                  marginLeft: "2%",
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "2px solid black",
                }}
                onClick={(e) => navigate("/community")}
              >
                {" "}
                {width > 700 && "Community"}
                <ForumIcon style={{ marginLeft: "10px" }} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  marginLeft: "2%",
                  cursor: "pointer",
                  padding: "10px",
                }}
                onClick={(e) => navigate("/community")}
              >
                {" "}
                {width > 700 && "Community"}
                <ForumIcon style={{ marginLeft: "10px" }} />
              </div>
            )}
            {path === "/dashboard" ? (
              <div
                style={{
                  display: "flex",
                  marginLeft: "2%",
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "2px solid black",
                }}
                onClick={(e) => navigate("/dashboard")}
              >
                {" "}
                {width > 700 && "Dashboard"}
                <DashboardIcon style={{ marginLeft: "10px" }} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  marginLeft: "2%",
                  cursor: "pointer",
                  padding: "10px",
                }}
                onClick={(e) => navigate("/dashboard")}
              >
                {" "}
                {width > 700 && "Dashboard"}
                <DashboardIcon style={{ marginLeft: "10px" }} />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
