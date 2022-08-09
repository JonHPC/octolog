//client/components/LogContainer.js
import React, {useState} from 'react';
import Log from './Log.js';

function LogContainer(props) {

    //iterate through all of the logs, and push into an array to be rendered
    const logs = []

    for(let i = 0; i < 10; i++){
        logs.push(<Log log={i}/>)
    }
    

    return(
        <div className='log-container'>
            {logs}
        </div>
    )
}

export default LogContainer;