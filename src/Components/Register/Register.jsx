import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@mui/material/TextField';

// import  "./Register.css"

 
const commonStyles = {
  width: '20rem',
};

 class Register extends React.Component {
  constructor(props) {
    super(props);

   
    if (!ValidatorForm.hasValidationRule('isPasswordMatch')) {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            if (value == formData.password) {
                return false;
            }
            return true;
        });
    }


    this.state = {
        formData: {
          email: "",
          password: '',
          repeatPassword: '',
          Name: "",
          Lastname: "",
          Displayname:"",
          Height: "",
          Weight: "",
          Address: "",
        },
        submitted: false,
    };
}

componentWillUnmount() {
  if (ValidatorForm.hasValidationRule('isPasswordMatch')) {
      ValidatorForm.removeValidationRule('isPasswordMatch');
  }
}

handleChange = (event) => {
  const { formData } = this.state;
  formData[event.target.name] = event.target.value;
  if (event.target.name === 'password') {
      this.form.isFormValid(false);
  }
  this.setState({ formData });
}

handleSubmit = () => {
  this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
  });
}




  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm className="boxs" ref={r => (this.form = r)}  onSubmit={this.handleSubmit}>
        <div className="form-register">
          <h2>Create a new account</h2>
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
            <label>Password:</label>
            <TextValidator
            sx={{ ...commonStyles, borderRadius: '40%' }}
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={formData.password}
            />
          </div>

          <div className="f-input">
          <label>Repeat password:</label>
          <TextValidator
          sx={{ ...commonStyles, borderRadius: '40%' }}
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={formData.repeatPassword}
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
              type="number"
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
            sx={{ ...commonStyles, borderRadius: '40%' }}
              label="Weight"
              type="number"
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
              style={{ backgroundColor: "#50A5B1", width:"100px" ,height:"30px" }}
              variant="contained"
              type="submit"
              disabled={submitted}
            >
              {(submitted && "Your form is submitted!") ||
                (!submitted && "Submit")}
            </Button>
            
            {/* {(submitted && <Link to="/dashboard"></Link>) ||
                (!submitted && "Submit")} */}

            <Button variant="contained" onClick={()=>{props.history.push('../Login/LoginForm.jsx')}}  style={{ backgroundColor: "#C32B42", width:"100px" ,height:"30px" }}>
              <Link to="/" style={{textDecoration: 'none',color: "white"}}>Cancel</Link>
            </Button>
          </div>
        </div>
        <div className="form-register-image">
        <Button variant="contained" style={{ backgroundColor: "#50A5B1" , width:"100px" ,height:"30px" }}>
          Upload
        </Button>
        </div>
      </ValidatorForm>
    );
  }
}
 
export default Register