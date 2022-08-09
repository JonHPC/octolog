//client/components/Log.js
import React, {useState} from 'react';

function Log(props) {
    const [log, setLog] = useState(props.log)
    return(
        <div className="log">
            <p>Log#{log}</p>
        </div>
    )
}

export default Log;