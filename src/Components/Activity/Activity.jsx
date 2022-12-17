import React, { useState, useCallback, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, MenuItem } from '@mui/material';
import './Activity.css'
import Grid from '@mui/material/Grid'; // Grid version 1';
import axios from 'axios';

const Activity = (props) => {
    const navigate = useNavigate();
    const id = props.id
    // console.log(props.id)
    
    // State of activity
    // const {id} = props.id
    const [state, setState] = useState({
        username:"",
        activityName:"",
        activityType:"",
        startDate:"",
        endDate:"",
        duration: "",
        status:"",
        detailActivity: "",
    })
    const { activityName, activityType, startDate, endDate, duration, detailActivity } = state
    
    async function getCardActivity() {
        try {
          const response = await axios.get(`${import.meta.env.VITE_APP_API}/card-activity/${id}`);
          const { activityName, activityType, startDate, endDate, duration, detailActivity } = response.data
          setState({ activityName, activityType, startDate, endDate, duration, detailActivity })
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(()=> {
        getCardActivity()
    },[])
    
    
    // Function

    const setActivityName = (e) => {
        setState({ ...state, activityName: e.target.value })
    }
    const selectActivity = (e) => {
        setState({ ...state, activityType: e.target.value })
    }
    const setDescriptiton = (e) => {
        setState({ ...state, detailActivity: e.target.value })
    }
    const selectstartdate = (e) => {
        setState({ ...state, startDate: e.target.value })
    }
    const selectenddate = (e) => {
        setState({ ...state, endDate: e.target.value })
    }
    useEffect(() => {
        // console.log('duration set!!')
        setState({ ...state, duration: getDateDifference() })
        // This function will be called whenever the value of date1 or date2 changes
        // console.log('The difference between the selected dates has changed');
    }, [startDate, endDate]);


    function getDateDifference() {
        const tempStartDate = new Date(startDate);
        const tempEndDate = new Date(endDate);
        const timeDifference = Math.abs(tempEndDate - tempStartDate);
        const diffHours = Math.floor(timeDifference / (1000 * 3600));
        const diffMinutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
        const diffSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const formattedTimeDifference = `${diffHours.toString().padStart(2, '0')}:${diffMinutes.toString().padStart(2, '0')}:${diffSeconds.toString().padStart(2, '0')}`;
        return formattedTimeDifference;
    }

   

    const submitForm = (e) => {
        e.preventDefault();
        axios.put(`${import.meta.env.VITE_APP_API}/edit-activity/${id}`,{ activityName, activityType, startDate, endDate, detailActivity,duration })
        .then(response => {
            alert('Edit Activity')
            console.log('after edit',response.data)
            setState(response.data)
            console.log(state)
        }).catch(err =>console.log(err))
    }

    const onBackClick = useCallback(() => {
        navigate('../dashboard')
    }, [navigate])
    const minDate = new Date().toISOString().substr(0, 16);


    return (
        (state && 
            <div className='form-activity' style={{ margin: "32px" }}>

            <form className='form-add' onSubmit={submitForm}>
                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={2}>
                        <label className=''>Activity Name: </label>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField id="activity_name" label="Activity Name" variant="outlined" value={activityName} validators={["required"]} onChange={setActivityName} required />
                        {/* <input type="text" className='form-control' onChange={setActivityName} /> */}
                    </Grid>
                </Grid>
                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={2}>
                        <label id="activity_type">Activity Type: </label>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={activityType}
                            label="Activity Type"
                            onChange={selectActivity}
                        >
                            <MenuItem value="walk">Walk</MenuItem>
                            <MenuItem value="run">Run</MenuItem>
                            <MenuItem value="hiking">Hiking</MenuItem>
                            <MenuItem value="swim">Swim</MenuItem>
                            <MenuItem value="bike">Bike</MenuItem>
                        </Select>
                        {/* <label className=''>Select Activity: </label>
                    <select className='form-select mb-3' onChange={selectActivity}>
                        <option value="walk">Walk</option>
                        <option value="run">Run</option>
                        <option value="hiking">Hiking</option>
                        <option value="swim">Swim</option>
                        <option value="bike">Bike</option>
                    </select> */}
                    </Grid>
                </Grid>
                {/* date start */}
                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={2}>
                        <label className=''>Start : </label>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField className=''
                            id="start_date"
                            label="Start :"
                            type="datetime-local"
                            value={startDate}
                            min={minDate}
                            // defaultValue="2022-12-07T09:30"
                            onChange={selectstartdate}
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                    </Grid>
                </Grid>
                {/* date end */}
                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={2}>
                        <label className=''>End : </label>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField className='m-3'
                            id="end_date"
                            label="End :"
                            type="datetime-local"
                            value={endDate}
                            // defaultValue="2022-12-28T10:30"
                            min={startDate}
                            onChange={selectenddate}
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={2}>
                        <label className=''>Duration :  </label>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField id="duration" label="" variant="outlined" value={duration} disabled />
                    </Grid>
                </Grid>

                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={2}>
                        <label className=''>Description: </label>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField
                            sx={{ borderRadius: '40%' }}
                            id="Decripttion"
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Minimum 3 rows"
                            multiline
                            label="Decripttion"
                            onChange={setDescriptiton}
                            name="Decripttion"
                            value={detailActivity}
                        // validators={["required"]}
                        // errorMessages={["this field is required"]}
                        />
                    </Grid>
                </Grid>


                {/* Button */}
                <button type="cancle" onClick={onBackClick} className="" style={{ backgroundColor: "#C32B42", marginRight: "16px" }}>Cancle</button>
                <button type="submit" value="submit" className="">Save</button>


            </form>
        </div>)
    )
}

export default Activity