import React, { useEffect, useState } from 'react'
import './maincard.css'
import { Box, Typography, 
    Button, Card, 
    CardActions, CardContent, 
    CardMedia, createTheme, Modal, Alert  } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PoolIcon from '@mui/icons-material/Pool';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import { flexbox } from '@mui/system';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'




// const themeCard = createTheme({
//     palette: {
//       pending: {
//         light: '#757ce8',
//         main: '#3f50b5',
//         dark: '#002884',
//         contrastText: '#fff',
//       },
//       success: {
//         light: '#A8E890',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//         gradient: 'linear-gradient(to right top, #e5d9b6, #dcd3a9, #d1ce9d, #c5c992, #b8c487, #a6b97c, #94ae71, #82a367, #6a8f59, #537b4b, #3d673d, #285430)',
//       },
//       delay: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });

const bgcolor = {
    // https://stackoverflow.com/questions/48849340/how-to-add-linear-gradient-color-to-mui-chip-background
    pending: "linear-gradient(to bottom, #eaeaea, #eceaeb, #f0e9ea, #f2eae6, #f0ebe3);",
    sucesss: "linear-gradient(to right top, #fffbc1, #eef5b7, #ddeeae, #cae8a7, #b6e2a1);",
    delay: "linear-gradient(to right top, #fffbc1, #f8d67e, #f9ac42, #fc780c, #ff1e00);",

}



const MainCard = ({card}) => {
    
    const navigate = useNavigate();
    
    const bgcolor2 = '#FFFFFF';


    const { username,activityName,activityType,startActivity,endActivity,
    detailActivity,status,duration } = card
    const {_id:id} = card

    const [dateStart,setDateStart] = useState(new Date());
    const [dateEnd,setdateEnd] = useState(new Date());
   
    
    const time = new Date()
    const timeHrMin = `${time.getHours()}:${time.getMinutes()}`
    const [timeRemain,setTimeRemain] = useState(timeHrMin)

    
    const [state,setState] = useState()
 
    
    
    
    const confirmDelete =(id)=> {
        const deleteCard = window.confirm(`You want to delete${id} !!`)
        if (deleteCard) {
            axios.delete(`${import.meta.env.VITE_APP_API}/card-activity/${id}`)
            .then(response => {
                window.alert(`Delete success !!`)
                window.location.reload()
            }).catch(err => console.log(err))
        }
    }

    // modal state
    const [modalState,setModalState] = useState(false)
    

    return (
    <Card  className='zoomOut'
        bgcolor2={bgcolor2} 
        
        sx={{ 
        // maxWidth: 400,
        //  bgcolor status
        // bgcolor: colorStatus,
        background: `${bgcolor2}`,
        'border-radius': `10px`,
    

        
            }} 
    > 
      <Box sx={{
        display:'flex',
        justifyContent: "space-between",
        alignItems:'center',
      }} >
            {activityName}
        <Box sx={{
            display:'flex',
            alignItems:'center',
        }}>
            <Typography 
                component="p" 
                variant="h5"
                sx={{
                    marginLeft:"10px",
                    marginRight:"2px"
                }}

            >
                {activityType}
            </Typography>
            <PoolIcon />

        </Box>
        
        <CardActions
            sx={{
                display: "flex",
                gap:'1px',
            }}>
                    
                <div>
                    <Button size="small">
                        <StickyNote2Icon />
                    </Button>

                    <Link to={`/editActivity/${id}`} id={id}>
                        <Button size="small" href='/editActivity'>
                            <EditIcon />
                        </Button>

                    </Link>

                    <Button size="small">
                        <DeleteIcon sx={{ color: 'red' }} onClick={()=>confirmDelete(id)} />
                    </Button>
                </div>
        </CardActions>
      
      </Box>
      
      {/* Date-Time */}
      <Box>
        <Typography  component="div" 
                sx={{
                    
                    textAlign:"start",
                    marginLeft:"10px",
                    color: '#434242',
                    fontSize: "14px",
                    
                }}
        >
            Start: {startActivity}
            {/* Start: {dateStart.toLocaleString()} */}
        </Typography>
        <Typography  component="div"  
                sx={{
                    textAlign:"start",
                    marginLeft:"10px",
                    marginBottom:"5px",
                    fontSize: "14px",
                    color: '#434242',
                }}
        >
            End: {endActivity}
            {/* End: {dateEnd.toLocaleString()} */}
        </Typography>
      </Box>
      
      {/* Description */}
      <Box
        sx={{
            width: "95%",
            // set div or another tag to center https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/
            margin:"0 auto",
            padding:"10px"
        }}
      >
        <Card sx={{ 
            minWidth: "100%" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    What's today
                </Typography>
     
            </CardContent>
            <CardActions sx={{
                display: "flex",
                alignItems:'center',
                justifyContent: "center",

                }}>
                <Button size="small" onClick={()=>setModalState(true)}>See more
                
                </Button>
            </CardActions>
            {setModalState && 
                <Modal
                                    open={modalState}
                                    onClose={()=>setModalState(false)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={ {
                                        position: 'relative',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 500,
                                        bgcolor: 'background.paper',
                                        border: '2px solid #000',
                                        boxShadow: 24,
                                        p: 4,
                                    } }>
                                        <div className='container-text-button'>
                                            <div>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                What's today
                                                <hr/>
                                            </Typography></div>
                                            <div className='btn-exit'>
                                                <Button onClick={() => setModalState(false)} >
                                                    <CloseIcon sx={{color:'red',}} />
                                                </Button>
                                            </div>
                                        </div>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            {detailActivity}
                                        </Typography>
                                    </Box>
                                </Modal>
            }
        </Card>
      </Box>
      {/* remain time */}
      <CardContent>
        <Box sx={{
                   display:"flex",
                    alignItems:'center',
                    justifyContent: "flex-end",
                    
                }}>
                    <AccessTimeIcon />
                    <Typography variant="h7" component="div" > remain : 1</Typography>
                </Box>
      </CardContent>
      
    </Card>
  )
}

export default MainCard;