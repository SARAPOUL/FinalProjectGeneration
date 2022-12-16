
// import TextField from '@mui/material/TextField';

// const editActivity = () =>{
//     // State of activity
//     const [state,setState] = useState({
//         activity:"",
//         startDate:"",
//         endDate:"",
//         decripttion:"",
//     })
//     const { activity,startDate,endDate,decripttion } = state

//     // Function

//     function selectActivity (event) {
//         setState({...state,activity:event.target.value})
//     }
//     const setDescriptiton = (event) => {
//         setState({...state,decripttion:event.target.value})
//     }

//     function selectstartdate (event) {
//         setState({...state,startDate:event.target.value})
//     }

//     function selectenddate (event) {
//         setState({...state,endDate:event.target.value})
//     }

//     const submitForm = (e) => {
//         e.preventDefault()
//         console.log(state)
//         // setState({
//         //     activity:"",
//         //     startDate:"",
//         //     endDate:"",
//         //     decripttion:"",
//         // })
//     }


//     return (
//         <div className='p-5'>
//             <h2 className='text-danger'>Edit Activity 9999</h2><hr />
//             <form className='form-add' onSubmit={submitForm}>

//                 {/* <label className='mt-3'>Activity Name: </label>
//             <input type="text" className='form-control'/> */}


//                 <label className='mt-3 h5'>Select Activity: </label>
//                 {/* onChange={selectActivity} */}
//                 <select className='form-select mb-3' onChange={selectActivity}>
//                     <option value="walk">Walk</option>
//                     <option value="run">Run</option>
//                     <option value="hiking">Hiking</option>
//                     <option value="swim">Swim</option>
//                     <option value="bike">Bike</option>
//                 </select>


//                 {/* date start */}
//                 <TextField className='mt-3'
//                     id="datetime-local"
//                     label="Start :"
//                     type="datetime-local"
//                     defaultValue="2022-12-07T09:30"
//                     onChange={selectstartdate}
//                     sx={{ width: 250 }}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />

//                 {/* date end */}
//                 <TextField className='m-3'
//                     id="datetime-local"
//                     label="End :"
//                     type="datetime-local"
//                     defaultValue="2022-12-28T10:30"
//                     onChange={selectenddate}
//                     sx={{ width: 250 }}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />

//                 {/* descriptiton' */}
//                 <br /><label className='m3 h5'>Description: </label>
//                 <div className="input-group">
//                     <textarea className="form-control " aria-label="With textarea" onChange={setDescriptiton}></textarea>
//                 </div>
//                 {/* Button */}
//                 <a type="cancle" href='/addactivity' className="btn btn-danger mt-3 me-3 px-5 py-2">cancle</a>
//                 <input type="submit" value="submit" className="btn btn-primary  mt-3  px-5 py-2" />


//             </form>
//         </div>
//     )
// }

// export default editActivity
import React, { useState, useCallback, useEffect } from 'react'
import Activity from "../Components/Activity/Activity"

const editActivity = () => {
    const [activity, setActivity] = useState({
        activityName: "test",
        activityType: "walk",
        decripttion: "test",
        duration: "02:21:00",
        endDate: "2022-12-16T22:30",
        startDate: "2022-12-16T20:09",
        userId: "1",
        _id: "1"
    });
    return (
        <div>
            <h2 className=''>Edit Activity </h2><hr />
            <Activity key={activity._id} activity={activity} />
        </div>
    )
}

export default editActivity