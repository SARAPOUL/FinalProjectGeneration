import React,{ useState, useEffect} from "react";
import './Dashboard.css'
import profilePicture from '../../assets/man.png'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainCard from "../Card/MainCard";
import {Link} from "react-router-dom"

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = { 
    labels: ['Run', 'Bicycle', 'Swim', 'Walk', 'Hike'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
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


const Dashboard = () => {
    
    const [card,setCard] =useState([
        {_id:'222',activity:'run',decripttion:'gogogo'},
        {_id:'222',activity:'run',decripttion:'gogogo'},
        {_id:'222',activity:'run',decripttion:'gogogo'},
    ]);
    
   

    // const {_id,activity,decripttion,endDate,startDate} = card;
    
    
    
    return(
        
        


    <div className="container">
            
            <div className="left">

                <div className='left-top'>
                    <button type="button" className="addActivity">
                        <a href="/addactivity">Add Activity</a>
                    </button>
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
                                <span>99</span>
                            </div>
                            <div className="activity">
                                <p>Completed:</p>
                                <span className="green">|</span>
                                <span>20</span>
                            </div>
                        </div>

                        <div className="activity-container">
                            <div className="activity">
                                <p>In progress:</p>
                                <span className="yellow">|</span>
                                <span>71</span>
                            </div>
                            <div className="activity">
                                <p>Incomplete:</p>
                                <span className="red">|</span>
                                <span>8</span>
                            </div>
                        </div>

                    </div>
                
            </div>
        
    </div>
    )
}
export default Dashboard