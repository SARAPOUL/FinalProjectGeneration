import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./Register.css";


  

const Register = () => {
  return (
    <box className="boxs"
      component="form" 
      noValidate
      autoComplete="off"
    >
      <div className="form-register">
      <h1>Create a new account</h1>
      <div className="f-input">
      <label>Email:</label>
        <TextField required id="email" label="Email"  type="email" />
      </div>
      <div className="f-input">
        <label>Password:</label>
        <TextField
          required
          id="Password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div className="f-input">
        <label>Name:</label>
        <TextField required id="name" label="Name" />
        </div>
        <div className="f-input">
        <label>Lastname:</label>
        <TextField required id="lastname" label="Lastname" />
        </div>
        <div className="f-input">
        <label>Displayname:</label>
        <TextField required id="display name" label="Display name" />
        </div>
        <div className="f-input">
        <label>Height:</label>
        <TextField required id="height" label="Height" /><label>Cm.</label>
        </div>
        <div className="f-input">
        <label>Weight:</label>
        <TextField required id="weight" label="Weight" /><label>Kg.</label>
        </div>
        <div className="f-input">
        <label>Address:</label>
        <TextareaAutosize
          id="Address"
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: 200 }}
        />
        </div>
        <div className="f-button">
        <Button variant="contained"   type="submit" style={{ backgroundColor: "#50A5B1"}}>Confirm</Button>
        <Button variant="contained" style={{ backgroundColor: "#C32B42"}}>Cancel</Button>
        </div>
      </div>
      <div className="form-register-image">
      <input
        type="file"
        multiple
        id="image"
      />
      </div>
    </box>
  );
};

export default Register;
