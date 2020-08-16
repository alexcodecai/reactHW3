import React from 'react'


function Btn(props) {
    return (
        <div>
            {(props.status === 1)? 
        <div>
          <button 
            onClick={props.stop}>stop
            </button>
          <button 
            onClick={props.reset}>Reset
            </button>
        </div> : ""
      }

            {(props.status === 2)? 
        <div>
          <button 
            onClick={props.start}>start
            </button>
          <button 
            onClick={props.reset}>Reset
            </button>
        </div> : ""
      }

            {(props.status === 0)? 
        <div>
          <button 
            onClick={props.start}>start
            </button>
          <button 
            onClick={props.reset}>Reset
            </button>
        </div> : ""
      }         


        </div>

    )
}


export default Btn

