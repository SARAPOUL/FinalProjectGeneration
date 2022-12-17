import React, { useState, useCallback, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, MenuItem } from '@mui/material';
import './Activity.css'
import Grid from '@mui/material/Grid'; // Grid version 1';
import activityPic from '../../assets/run.png'
import addheader from '../../assets/add.png'

const Activity = (props) => {
    // State of activity
    const [state, setState] = useState({
        _id: props.activity ? props.activity._id : "",
        userId: props.activity ? props.activity.userId : "",
        activityName: props.activity ? props.activity.activityName : "",
        activityType: props.activity ? props.activity.activityType : "",
        startDate: props.activity ? props.activity.startDate : "",
        endDate: props.activity ? props.activity.endDate : "",
        duration: props.activity ? props.activity.duration : "",
        decripttion: props.activity ? props.activity.decripttion : "",
    })
    const { _id, userId, activityName, activityType, startDate, endDate, duration, decripttion } = state
    const navigate = useNavigate();
    // Function

    const setActivityName = (e) => {
        setState({ ...state, activityName: e.target.value })
    }
    const selectActivity = (e) => {
        setState({ ...state, activityType: e.target.value })
    }
    const setDescriptiton = (e) => {
        setState({ ...state, decripttion: e.target.value })
    }
    const selectstartdate = (e) => {
        setState({ ...state, startDate: e.target.value })
    }

    const selectenddate = (e) => {
        setState({ ...state, endDate: e.target.value })
    }

    const setDuration = (e) => {
        setState({ ...state, duration: e.target.value })
    }


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

    useEffect(() => {
        setState({ ...state, duration: getDateDifference() })
        // This function will be called whenever the value of date1 or date2 changes
        // console.log('The difference between the selected dates has changed');
    }, [startDate, endDate]);

    const submitForm = (e) => {
        e.preventDefault()
        if(props.activity){
            //edit 
        }else{
            //add
        }
        console.log(state)
        // setState({
        //     activity:"",
        //     startDate:"",
        //     endDate:"",
        //     decripttion:"",
        // })
    }

    const onBackClick = useCallback(() => {
        navigate('../dashboard')
    }, [navigate])
    const minDate = new Date().toISOString().substr(0, 16);


    return (
        <div className="flex">
            <div className="form-pic">
                <img src={activityPic} className="run-picture"/>
            </div>
            <form className='form-add' onSubmit={submitForm}>
                <div className="add-header">
                    <img src={addheader} />
                </div>
                
                <Grid container spacing={0} margin={2} >
                    <Grid item xs={12} md={4}>
                        <label className=''>Activity Name: </label>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField id="activity_name" label="Activity Name" variant="outlined" value={activityName} validators={["required"]} onChange={setActivityName} required />
                        {/* <input type="text" className='form-control' onChange={setActivityName} /> */}
                    </Grid>
                </Grid>

                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={4}>
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
                    <Grid item xs={12} md={4}>
                        <label className=''>Start : </label>
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                    <Grid item xs={12} md={4}>
                        <label className=''>End : </label>
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                    <Grid item xs={12} md={4}>
                        <label className=''>Duration : </label>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField id="duration" label="" variant="outlined" value={duration} onChange={setDuration} disabled />
                    </Grid>
                </Grid>

                <Grid container spacing={0} margin={2}>
                    <Grid item xs={12} md={4}>
                        <label className=''>Description: </label>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField
                            sx={{ borderRadius: '40%' }}
                            id="Decripttion"
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Minimum 3 rows"
                            multiline
                            label="Description"
                            onChange={setDescriptiton}
                            name="Description"
                            value={decripttion}
                        // validators={["required"]}
                        // errorMessages={["this field is required"]}
                        />
                    </Grid>
                </Grid>


                {/* Button */}
                <div className="btn">
                    <button type="cancle" onClick={onBackClick} className="" style={{ backgroundColor: "#C32B42", marginRight: "16px" }}>Cancle</button>
                    <button type="submit" value="submit" className="">Save</button>
                </div>
             


            </form>
        </div>
    )
}

export default Activity