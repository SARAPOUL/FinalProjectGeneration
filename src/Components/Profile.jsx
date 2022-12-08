import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from '@mui/material/Button';
import "./Register.css";


const Profile = () => {
  return (
    <box className="boxs"
      component="form" 
      noValidate
      autoComplete="off"
    >
      <div className="form-register">
      <h1>Profile</h1>
      <div className="f-input">
      <label>Email:</label>
        <TextField  InputProps={{readOnly: true}}id="email"  />
      </div>
        <div className="f-input">
        <label>Name:</label>
        <TextField InputProps={{readOnly: true}} id="name"  />
        </div>
        <div className="f-input">
        <label>Lastname:</label>
        <TextField InputProps={{readOnly: true}} id="lastname"  />
        </div>
        <div className="f-input">
        <label>Displayname:</label>
        <TextField InputProps={{readOnly: true}} id="display name"  />
        </div>
        <div className="f-input">
        <label>Height:</label>
        <TextField InputProps={{readOnly: true}} id="height"  /><label>Cm.</label>
        </div>
        <div className="f-input">
        <label>Weight:</label>
        <TextField InputProps={{readOnly: true}} id="weight"  /><label>Kg.</label>
        </div>
        <div className="f-input">
        <label>Address:</label>
        <TextareaAutosize
         readonly=""
          id="Address"
          aria-label="minimum height"
          minRows={3}
          style={{ width: 200 }}
        />
        </div>
        <div className="f-button">
        <Button variant="contained" style={{ backgroundColor: "#C32B42"}}>Back</Button>
        <Button variant="contained" style={{ backgroundColor: "#50A5B1"}}>Edit</Button>
        </div>
      </div>
      <div className="form-register-image">
      <img></img>
      </div>
    </box>
  );
};

export default Profile;
