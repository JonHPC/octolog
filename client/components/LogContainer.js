//client/components/LogContainer.js
import React, {useState} from 'react';
import Log from './Log.js';

function LogContainer(props) {


    const addLog = () => {
        console.log('addLog function ran')
    }

    //iterate through all of the logs, and push into an array to be rendered
    const logs = []

    for(let i = 10; i >=1 ; i--){
        logs.push(
            <Log 
                key={i}
                log={i} 
                title="Anacapa Island"
                date="06/18/22"
                location="Anacapa Island Coral Reef"
                maxDepth="15.9"
                avgDepth="10.5"
                timeIn="11:34"
                timeOut="12:02"
                temp="18"
                tankStart="200"
                tankEnd="70"
            />
        )
    }

    return(
        <div className='log-container'>
            <button onClick={addLog}>Add log</button>
            {logs}
        </div>
    )
}

export default LogContainer;