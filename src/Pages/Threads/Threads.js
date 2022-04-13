import React, { useState } from "react";
import "./css/Threads.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useFormik } from "formik";
import ReactMarkdown from "react-markdown";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Threads = () => {
  const question = "My Internship experience with Texas Instruments";
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting 
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    console.log("fdsfdf");
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const AuthorPost = () => {
    return (
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
        <div
          style={{
            margin: "4px",
            marginTop: "1%",
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            padding: "2%",
          }}
        >
          {description}
        </div>
      </div>
    );
  };

  const CommentForm = () => {
    const formik = useFormik({
      initialValues: {
        comment: "",
      },
      onSubmit: (values) => {
        // alert(JSON.stringify(comment, null, 2));
        handleClick();
      },
    });

    const [comment, setComment] = useState("");

    function handleChange(e) {
      setComment(e.target.value);
    }

    return (
      <div>
        <div
          className="ThreadsComment"
          style={{
            margin: "20px",
            marginBottom: "40px",
          }}
        >
          <div>
            <form onSubmit={formik.handleSubmit}>
              <textarea
                style={{
                  width: "99.8%",
                  height: "60px",
                  transform: "translateY(5px)",
                }}
                name="comment"
                onChange={handleChange}
                value={formik.values.email}
                placeholder="Type your comment here ... (Markdown is supported)"
              />
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  border: ".1px solid black",
                  overflow: "scroll",
                  paddingLeft: "2px",
                  fontSize: ".8rem",
                  color: "#868686",
                }}
              >
                <ReactMarkdown>
                  {comment.length > 0 ? comment : "Comment Preview"}
                </ReactMarkdown>
              </div>
              <Button
                variant="contained"
                type="submit"
                style={{ float: "right" }}
              >
                Post
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const CommentPost = () => {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "2%" }}>
          <img
            className="img-sugg"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWBnyvJtrWYVL5q2Nwl1UkCOxOPxFGoORjg&usqp=CAU"
            }
            alt="#"
          />
        </div>
        <div
          style={{
            margin: "4px",
            marginTop: "1%",
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            padding: "1%",
          }}
        >
          <div className="sug-name" style={{ color: "#868686" }}>
            Rodger Federer
          </div>
          <div className="sug-username" style={{ color: "#868686" }}>
            13 April 2022 12:33
          </div>
          {"How was your learing graph and how much do you learn from there ?"}
        </div>
      </div>
    );
  };

  return (
    <div className="ThreadsCover">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Comment Successfully Published !!!
        </Alert>
      </Snackbar>
      <div className="ThreadsQuestion">
        {question}
        <div
          style={{
            fontSize: "1rem",
            color: "#868686",
            cursor: "pointer",
          }}
        >
          {" "}
          <ThumbUpOutlinedIcon className="thumbupIcon" />
          {"1k"}
          <RemoveRedEyeOutlinedIcon
            style={{ marginLeft: ".5rem", marginTop: ".7rem" }}
          />
          {"1M"}
        </div>
      </div>
      <br />
      <hr
        style={{
          height: "0.02px",
          color: "#333",
          backgroundColor: "#333",
        }}
      />
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
          <div className="sug-name" style={{ color: "#868686" }}>
            Author: Prerit Kumar Jha
          </div>
          <div className="sug-username" style={{ color: "#868686" }}>
            13 April 2022 12:33
          </div>
        </div>
      </div>
      <AuthorPost />
      <CommentForm />
      <CommentPost />
      <CommentPost />
      <CommentPost />
      <CommentPost />
      <CommentPost />
    </div>
  );
};
