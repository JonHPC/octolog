//client/components/Log.js
import React, {useState} from 'react';

function Log(props) {
    const [log, setLog] = useState(props.log);
    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);
    const [location, setLocation] = useState(props.location);
    const [maxDepth, setMaxDepth] = useState(props.maxDepth);
    const [avgDepth, setAvgDepth] = useState(props.avgDepth);
    const [timeIn, setTimeIn] = useState(props.timeIn);
    const [timeOut, setTimeOut] = useState(props.timeOut);
    const [temp, setTemp] = useState(props.temp);
    const [tankStart, setTankStart] = useState(props.tankStart);
    const [tankEnd, setTankEnd] = useState(props.tankEnd);

    return(
        <div className="log">
            <h3>Log#{log} - {title} - {date}</h3>
            <p>Location: {location}</p>
            <p>Max Depth: {maxDepth} m</p>
            <p>Avg Depth: {avgDepth} m</p>
            <p>Time In: {timeIn}</p>
            <p>Time Out: {timeOut}</p>
            <p>Temp: {temp} °C</p>
            <p>Tank Start: {tankStart} bar</p>
            <p>Tank End: {tankEnd} bar</p>
        </div>
    )
}

export default Log;