import React from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@mui/material/TextField';

export default class SimpleFormExample extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      Name: "",
      Lastname: "",
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
          <h2>Create a new account</h2>
          <div className="f-input">
            <label>Email:</label>
            <TextValidator
              label="Email"
              onChange={this.handleChange}
              name="email"
              value={formData.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </div>

          <div className="f-input">
            <label>Password:</label>
            <TextValidator
              label="Password"
              onChange={this.handleChange}
              name="password"
              value={formData.password}
              validators={['required']}
              errorMessages={["this field is required"]}
            />
          </div>

          <div className="f-input">
            <label>Name:</label>
            <TextValidator
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
              label="Height"
              onChange={this.handleChange}
              name="Height"
              value={formData.Height}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>

          <div className="f-input">
            <label>Weight:</label>
            <TextValidator
              label="Weight"
              onChange={this.handleChange}
              name="Weight"
              value={formData.Weight}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="f-input">
            <label>Address:</label>
            <br/>
            <TextField
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
              style={{ backgroundColor: "#50A5B1" }}
              variant="contained"
              type="submit"
              disabled={submitted}
            >
              {(submitted && "Your form is submitted!") ||
                (!submitted && "Submit")}
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#C32B42" }}>
              Cancel
            </Button>
          </div>
        </div>
        <div className="form-register-image">
          <input type="file" multiple id="image" />
        </div>
      </ValidatorForm>
    );
  }
}
