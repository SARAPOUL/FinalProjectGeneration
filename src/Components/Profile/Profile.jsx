import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@mui/material/TextField';
import "../Register/Register.css"

const commonStyles = {
  width: '19rem',
};

 class Profile extends React.Component {
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
          <h2>Profile</h2>
          <div className="f-input">
            <label>Email:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label=""
              onChange={this.handleChange}
              name="email"
              value={formData.email}
              InputProps={{readOnly: true}}
            />
          </div>

          <div className="f-input">
            <label>Name:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label=""
              onChange={this.handleChange}
              name="Name"
              value={formData.Name}
              InputProps={{readOnly: true}}
            />
          </div>

          <div className="f-input">
            <label>Lastname:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label=""
              onChange={this.handleChange}
              name="Lastname"
              value={formData.Lastname}
              InputProps={{readOnly: true}}
            />
          </div>

          <div className="f-input">
            <label>Displayname:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label=""
              onChange={this.handleChange}
              name="Displayname"
              value={formData.Displayname}
              InputProps={{readOnly: true}}
            />
          </div>

          <div className="f-input">
            <label>Height:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label=""
              onChange={this.handleChange}
              name="Height"
              value={formData.Height}
              InputProps={{readOnly: true}}
            />
          </div>

          <div className="f-input">
            <label>Weight:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label=""
              onChange={this.handleChange}
              name="Weight"
              value={formData.Weight}
              InputProps={{readOnly: true}}
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
              multiline    
              label=""
              onChange={this.handleChange}
              name="Address"
              value={formData.Address}
              InputProps={{readOnly: true}}
            />
          </div>
          <div className="f-button">
            <Button
              style={{ backgroundColor: "#C32B42", width:"100px" ,height:"30px" }}
              variant="contained"
              type="submit"
              disabled={submitted}
              InputProps={{readOnly: true}}
            >
              <Link to="/dashboard" style={{textDecoration: 'none',color: "white"}}>Back</Link>
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#50A5B1", width:"100px" ,height:"30px" }}>
              Edit
            </Button>
          </div>
        </div>
        <div className="form-register-image">
          <img type="img" multiple id="image" />
        </div>
      </ValidatorForm>
    );
  }
}
 
export default Profile