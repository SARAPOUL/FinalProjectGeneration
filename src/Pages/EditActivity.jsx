
import React, { useState, useCallback, useEffect } from 'react'
import Activity from "../Components/Activity/Activity"
import { useLocation, useNavigate } from 'react-router-dom'

const EditActivity = () => {

    const [location,setLocation] = useState(useLocation())
    const id = location.pathname.slice(14);

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
            <Activity key={activity._id} activity={activity} id={id} />
        </div>
    )
}

export default EditActivity