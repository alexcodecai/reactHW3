import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




function Btn(props) {
  
    return (
        <div className = "btn">
            {(props.status === 1)? 
        <div >
          {/* <button className= "stop"
            onClick={props.stop}>stop
            </button> */}
            <Button variant="contained" color="primary" 
            onClick={props.stop}>Stop</Button>
            <Button variant="contained" color="primary" 
            onClick={props.reset}>Reset</Button>
          {/* <button  className= "reset"  
            onClick={props.reset}>Reset
            </button> */}
        </div> : ""
      }

            {(props.status === 2)? 
        <div>
         <Button variant="contained" color="primary" 
            onClick={props.start}>Start</Button>
        <Button variant="contained" color="primary" 
            onClick={props.reset}>Reset</Button>
          {/* <button 
            onClick={props.start}>start
            </button>
          <button 
            onClick={props.reset}>Reset
            </button> */}
        </div> : ""
      }

            {(props.status === 0)? 
        <div>
        <Button variant="contained" color="primary" 
            onClick={props.start}>Start</Button>
        <Button variant="contained" color="primary" 
            onClick={props.reset}>Reset</Button>
          {/* <button 
            onClick={props.start}>start
            </button>
          <button 
            onClick={props.reset}>Reset
            </button> */}
        </div> : ""
      }         


        </div>

    )
}


export default Btn

