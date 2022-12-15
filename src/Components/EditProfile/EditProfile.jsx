import React,{ useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@mui/material/TextField';
import "./EditProfile.css"

const commonStyles = {
  width: '19rem',
};

 class EditProfile extends React.Component {
  state = {
    formData: {
      email: "",
      Name: "",
      Lastname: "",
      Displayname:"",
      Height: "",
      Weight: "",
      Address: "",
    },
    submitted: false,
  };
  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), );
    });
  };



  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm className="boxs" ref="form" onSubmit={this.handleSubmit}>
        <div className="form-register">
          <h2>EditProfile</h2>
          <div className="f-input">
            <label>Email:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Email"
              onChange={this.handleChange}
              name="email"
              value={formData.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </div>


          <div className="f-input">
            <label>Name:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Name"
              onChange={this.handleChange}
              name="Name"
              value={formData.Name}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>

          <div className="f-input">
            <label>Lastname:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Lastname"
              onChange={this.handleChange}
              name="Lastname"
              value={formData.Lastname}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>

          <div className="f-input">
            <label>Displayname:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Displayname"
              onChange={this.handleChange}
              name="Displayname"
              value={formData.Displayname}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>

          <div className="f-input">
            <label>Height:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Height"
              onChange={this.handleChange}
              name="Height"
              type="number"
              value={formData.Height}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>

          <div className="f-input">
            <label>Weight:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Weight"
              onChange={this.handleChange}
              name="Weight"
              type="number"
              value={formData.Weight}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="f-input">
            <label>Address:</label>
            <br/>
            <TextField
            sx={{ ...commonStyles, borderRadius: '40%' }}
              id="Address"
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"   
              multiline    
              label="Address"
              onChange={this.handleChange}
              name="Address"
              value={formData.Address}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="f-button">
            <Button
              style={{ backgroundColor: "#C32B42", width:"100px" ,height:"30px" }}
              variant="contained"
              type="submit"
              disabled={submitted}
            >
              <Link to="/profile" style={{textDecoration: 'none',color: "white"}}>Back</Link>
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#50A5B1", width:"100px" ,height:"30px" }}>
              <Link to="/profile" style={{textDecoration: 'none',color: "white"}}>Save</Link>
            </Button>
          </div>
        </div>
        <div className="form-register-image">
        <Button variant="contained" style={{ backgroundColor: "#50A5B1", width:"100px" ,height:"30px" }}>
          Upload
        </Button>
        </div>
      </ValidatorForm>
    );
  }
}
 
export default EditProfile