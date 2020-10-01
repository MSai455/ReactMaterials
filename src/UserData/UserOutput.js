import React from 'react';
import './UserOutput.css'

const useroutput = (props) =>{

return(

    <div className="UserOutput">
        <p>{props.data}</p>
        <p>{props.data1}</p>
    </div>
)

}

export  default  useroutput;