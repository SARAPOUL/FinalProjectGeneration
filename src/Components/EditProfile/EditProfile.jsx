import * as React from "react";
import { register as registerAxios } from '../Functions/auth'
import FileUpload from "../Register/FileUpload";
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Register/Register.css";

const EditProfile = () => {

 

  const getData = () => {
    // e.preventDefault();
    axios
      .get("http://localhost:8080/api/users/" + localStorage.user)
      .then((response) => {
        // console.log(response.data);
        // setPost(response.data);
        console.log(response.data);
        setValue('firstname',response.data.firstname);
        setValue('lastname',response.data.lastname);
        setValue('displayname',response.data.displayname);
        setValue('height',response.data.height);
        setValue('weight',response.data.weight);
        setValue('address',response.data.address);
      });
  };


  useEffect(() => {
    getData();
  }, []);

  
  const navigate = useNavigate();

  const [img, setImg] = useState({
    images: []
  })
  const {
    register,
    setValue,
    handleSubmit,
  } = useForm({});
  const onSubmit = (data) => {
    // console.log(value.images);
    // data.images = value.images
    // console.log(data);
    registerAxios(data)
    Swal.fire(
      'Edit Success!',
      'You clicked the button!',
      'success'
    ) 
    navigate('/profile');
  }
  // const onSubmit = (data) => /แสดงข้อมูลให้ดู

  return (
    <form className="boxs" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-register">
        <h1>EditProfile</h1>
        <div className="f-input">
          <label>Fisrt Name:</label>
          <br />
          <TextField
            required
            name="firstname"
            {...register("firstname", { required: true })}
          />
        </div>
        <div className="f-input">
          <label>Last Name:</label>
          <br />
          <TextField
            required
            name="lastname"
            {...register("lastname", { required: true })}
          />
        </div>
        <div className="f-input">
          <label>Display Name:</label>
          <br />
          <TextField
            required
            name="displayname"
            {...register("displayname", { required: true })}
          />
        </div>
        <div className="f-input">
          <label>Height:</label>
          <br />
          <TextField
            required
            name="height"
            type="number"
            {...register("height", { required: true })}
          />
          <label>Cm.</label>
        </div>
        <div className="f-input">
          <label>Weight:</label>
          <br />
          <TextField
            required
            name="weight"
            type="number"
            {...register("weight", { required: true })}
          />
          <label>Kg.</label>
        </div>
        <div className="f-input">
          <label>Address:</label>
          <br />
          <TextField
            name="address"
            aria-label="minimum height"
            minRows={3}
            label=""
            style={{ width: 200 }}
            {...register("address", { required: true })}
          />
        </div>
        <div className="f-button">
          <Button
            variant="contained"
            type="submit"
            onSubmit="handleSubmit"
            style={{
              backgroundColor: "#50A5B1",
              width: "100px",
              height: "30px",
            }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#C32B42",
              width: "100px",
              height: "30px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Cancel
            </Link>
          </Button>
        </div>
      </div>

      <div className="form-register-image">
        {/* <FileUpload   key={value} value={value} setValue={setValue} /> */}
      </div>
    </form>
  );
};

export default EditProfile;

