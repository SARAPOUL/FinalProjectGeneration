import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "../Register/Register.css";

const Profile = () => {
  const onSubmit = (data) => console.log(data);

  const getData = () => {
    // e.preventDefault();
    axios
      .get("http://localhost:8080/api/users/" + localStorage.user)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [post, setPost] = useState({
    firstname: "",
    lastname: "",
    displayname: "",
    height: 0,
    weight: 0,
    images: [],
  });
  console.log(post);
  return (
    <form className="boxs">
      <div className="form-register">
        <h1>Profile</h1>
        <div className="f-input">
          <label>Email:</label>
          <br />
          <TextField
            name="email"
            type="email"
            label={post.username}
            InputProps={{ readOnly: true }}
          />
        </div>
        <div className="f-input">
          <label>First Name:</label>
          <br />
          <TextField
            name="firstname"
            label={post.firstname}
            InputProps={{ readOnly: true }}
          />
        </div>
        <div className="f-input">
          <label>Last Name:</label>
          <br />
          <TextField
            name="lastname"
            label={post.lastname}
            InputProps={{ readOnly: true }}
          />
        </div>
        <div className="f-input">
          <label>Display Name:</label>
          <br />
          <TextField
            name="displayname"
            label={post.displayname}
            InputProps={{ readOnly: true }}
          />
        </div>
        <div className="f-input">
          <label>Height:</label>
          <br />
          <TextField
            name="height"
            label={post.height}
            InputProps={{ readOnly: true }}
          />
          <label>Cm.</label>
        </div>
        <div className="f-input">
          <label>Weight:</label>
          <br />
          <TextField
            required
            label={post.weight}
            name="weight"
            InputProps={{ readOnly: true }}
          />
          <label>Kg.</label>
        </div>
        <div className="f-input">
          <label>Address:</label>
          <br />
          <TextField
            multiline
            name="address"
            aria-label="minimum height"
            minRows={3}
            label={post.address}
            style={{ width: 200 }}
            InputProps={{ readOnly: true }}
          />
        </div>
        <div className="f-button">
          <Button
            style={{
              backgroundColor: "#C32B42",
              width: "100px",
              height: "30px",
            }}
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Back
            </Link>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#50A5B1",
              width: "100px",
              height: "30px",
            }}
          >
            <Link
              to="/editProfile"
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit
            </Link>
          </Button>
        </div>
      </div>

      <div className="form-register-image">
        <img src={localStorage.images} width="240" height="260" />
      </div>
    </form>
  );
};

export default Profile;
