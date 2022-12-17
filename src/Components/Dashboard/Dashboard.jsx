import React,{ useState, useEffect} from "react";
import './Dashboard.css'
import profilePicture from '../../assets/man.png'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainCard from "../Card/MainCard";
import {Link} from "react-router-dom"


// const [chartData, setChartData] = useState([{
//     labels: ['Run', 'Bicycle', 'Swim', 'Walk', 'Hike'],
//     datasets: [
//       {
//         data: [12, 19, 3, 5, 2],
//         label: 'Hour of activity',
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
          
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
          
//         ],
//         borderWidth: 1,
//       },
//     ], 
// }])



// export 


const Dashboard = () => {

    const [chartData, setChartData] = useState([
        {activityName:'Run',count:12},
        {activityName:'Bicycle',count:20},
        {activityName:'Swim',count:21},
        {activityName:'Walk',count:30},
        {activityName:'Hike',count:100},
    ])

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = { 
        labels: chartData.map(item => item.activityName),
        datasets: [
          {
            data: chartData.map(item => item.count),
            label: 'Hour of activity',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
    
    // const [chartData, setChartData] = useState([{
    //     labels: chartData.map(item => item.activityName),
    //     datasets: [
    //       {
    //         data: chartData.map(item => item.count),
    //         label: 'Hour of activity',
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
              
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
              
    //         ],
    //         borderWidth: 1,
    //       },
    //     ], 
    // }])

    

    const [card,setCard] =useState([
        {_id:'222',activity:'run',decripttion:'gogogo'},
        {_id:'222',activity:'run',decripttion:'gogogo'},
        {_id:'222',activity:'run',decripttion:'gogogo'},
    ]);

    const [activityData,setActivityData] =useState([
        {_id:'1',Type:'Total activity',amount:'98'},
        {_id:'2',Type:'Completed',amount:'21'},
        {_id:'3',Type:'Inprogress',amount:'74'},
        {_id:'4',Type:'Incomplete',amount:'9'},
    ]);
    


    // const {_id,activity,decripttion,endDate,startDate} = card;
    
    
    
    return(
        
        


    <div className="container">
            
            <div className="left">

                <div className='left-top'>
                     <a href="/addactivity"><button type="button" className="addActivity">Add Activity</button></a>
                   
                </div>

                <div className='left-bottom'>
                    <div className='left-bottom-background'>
                        <div className="grid-container">
                            <Grid container 
                            direction="row"
                            justifyContent="center" 
                            alignItems="center"
                             spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            
                            {card.length >0 && card.map((carditem,index) => 
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <MainCard key={carditem._id} id={carditem._id}/>
                                </Grid>
                            )}
                            
                            {/* {Array.from(Array(6)).map((_, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <SwimCard props={card} />
                                </Grid>
                            ))} */}

                            </Grid>
                        </div>
                    </div>                  
                    
                    
                    
                </div>

            </div>
            <div className="right">
                
                    <div className="display-card">
                        <span>Hello, </span>
                        <h2>Display Name</h2>
                        <Link to="/profile" className="picture-link">
                            <img src={profilePicture} alt="profile-picture" className="profile-picture" />
                        </Link>
        
                        <div className="graph">
                            <Doughnut data={data} />
                        </div>

                        <div className="activity-container">
                            <div className="activity">
                                <p>Total activity:</p>
                                <span className="gray">|</span>
                                <span>{activityData[0].amount}</span>
                            </div>
                            <div className="activity">
                                <p>Completed:</p>
                                <span className="green">|</span>
                                <span>{activityData[1].amount}</span>
                            </div>
                        </div>

                        <div className="activity-container">
                            <div className="activity">
                                <p>In progress:</p>
                                <span className="yellow">|</span>
                                <span>{activityData[2].amount}</span>
                            </div>
                            <div className="activity">
                                <p>Incomplete:</p>
                                <span className="red">|</span>
                                <span>{activityData[3].amount}</span>
                            </div>
                        </div>

                    </div>
                
            </div>
        
    </div>
    )
}
export default Dashboard