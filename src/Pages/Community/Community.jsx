import React, { useEffect, useState } from "react";
import "./css/Community.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import { CommunityCard } from "./CommunityCard";
import axios from "axios";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles({
  CommunityCardCover: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    flexWrap: "wrap",
  },
});

export const Community = () => {
  const [age, setAge] = React.useState(10);
  const [Community, setCommunity] = useState({ data: [] });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const classes = useStyles();
  const { CommunityCardCover } = classes;

  useEffect(() => {
    axios
      .get("http://localhost:3000/community")
      .then((data) => {
        setCommunity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="BGimage">
        <div style={{ padding: "2px" }}>
          Explore{" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Communities")
                .pauseFor(2000)
                .deleteAll()
                .typeString("#tags")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Threads")
                .start();
            }}
          />
        </div>
      </div>
      <div className="searchBox">
        <div style={{ display: "flex", margin: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Search ..."
            variant="outlined"
            style={{
              background: "white",
              transform: "translateY(8px)",
            }}
            className="SearchInput"
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Catagory
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Category"
            >
              <MenuItem value={10}>Community</MenuItem>
              <MenuItem value={21}>#tags</MenuItem>
              <MenuItem value={22}>Threads</MenuItem>
            </Select>
          </FormControl>
          <img
            style={{
              cursor: "pointer",
              transform: "translateY(9px)",
              width: "80px",
              height: "50px",
              borderRadius: "50%",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHl_Awxa0w_YWe3chZKuToRT9du5eVjwpbNA&usqp=CAU"
          />
        </div>
      </div>
      <div className={CommunityCardCover}>
        {Community.data.map((community) => {
          return <CommunityCard {...community} />;
        })}
      </div>
    </div>
  );
};
