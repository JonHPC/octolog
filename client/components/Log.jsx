//client/components/Log.jsx
import React, {useState} from 'react';

function Log(props) {
    const [log, setLog] = useState(props.log);
    const [title, setTitle] = useState(props.title);
    const [createdOn, setCreatedOn] = useState(props.createdOn);
    const [createdBy, setCreatedBy] = useState(props.createdBy);
    const [diveSite, setDiveSite] = useState(props.diveSite);
    const [maxDepth, setMaxDepth] = useState(props.maxDepth);
    const [avgDepth, setAvgDepth] = useState(props.avgDepth);
    const [timeIn, setTimeIn] = useState(props.timeIn);
    const [timeOut, setTimeOut] = useState(props.timeOut);
    const [temp, setTemp] = useState(props.temp);
    const [tankStart, setTankStart] = useState(props.tankStart);
    const [tankEnd, setTankEnd] = useState(props.tankEnd);
    const [buddies, setBuddies] = useState(props.buddies);
    const [diveComments, setDiveComments] = useState(props.diveComments);

    return(
        <div className="log">
            <h3>Log#{log} - {title} - {createdOn}</h3>
            <p>Created By user_id: {createdBy}</p>
            <p>Dive Site: {diveSite}</p>
            <p>Max Depth: {maxDepth} m</p>
            <p>Avg Depth: {avgDepth} m</p>
            <p>Time In: {timeIn}</p>
            <p>Time Out: {timeOut}</p>
            <p>Temp: {temp} °C</p>
            <p>Tank Start: {tankStart} bar</p>
            <p>Tank End: {tankEnd} bar</p>
            <p>Buddies: {buddies}</p>
            <p>Dive Comments: {diveComments}</p>
        </div>
    )
}

export default Log;



/*
INSERT INTO logs (
  log_id,
  user_id,
  title,
  created_on,
  dive_site,
  max_depth,
  avg_depth,
  time_in,
  time_out,
  temperature,
  tank_start,
  tank_end,
  buddies,
  dive_comments
 )
 
 VALUES (
   7,
   1,
   'Santa Cruz Islands',
   '2022-06-18',
   'Big Scorpion',
   12.7,
   9.7,
   '09:17',
   '09:55',
   16.4,
   200,
   82,
   'Katie and Scott',
   'Visibility: ~3m, Cylinder 11.1 Lt, Deco Time: 3 min'
 )
 RETURNING *
 ;
*/