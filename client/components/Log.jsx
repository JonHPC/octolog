//client/components/Log.jsx
import React, { useState, useEffect} from 'react';

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
  const [temperature, setTemperature] = useState(props.temperature);
  const [tankStart, setTankStart] = useState(props.tankStart);
  const [tankEnd, setTankEnd] = useState(props.tankEnd);
  const [tankSize, setTankSize] = useState(11.1);
  const [buddies, setBuddies] = useState(props.buddies);
  const [diveComments, setDiveComments] = useState(props.diveComments);

  //convert the createdOn prop to a new Date object
  const date = new Date(createdOn);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  const day = date.getDate();

  //if the month is less than 10, add a 0 in front
  if (date.getMonth() < 10) {
    month = `0${parseInt(date.getMonth()) + 1}`;
  }

  //declare a new const to hold the processed date
  const processedDate = `${year}-${month}-${day}`;

  //calculate dive time
  const floatTimeIn = timeStringToFloat(timeIn);
  const floatTimeOut = timeStringToFloat(timeOut);
  const diveFloatTime = floatTimeIn - floatTimeOut;
  const diveTime = convertNumToTime(diveFloatTime);

  //function to convert time to float
  function timeStringToFloat(time) {
    let hoursMinutes = time.split(/[.:]/);
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return (hours + minutes / 60).toFixed(2);
  }

  //function to convert float time back to float
  function convertNumToTime(number) {
    // Check sign of given number
    var sign = number >= 0 ? 1 : -1;
    // Set positive value of number of sign negative
    number = number * sign;
    // Separate the int from the decimal part
    var hour = Math.floor(number);
    var decpart = number - hour;
    var min = 1 / 60;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    var minute = Math.floor(decpart * 60) + '';
    // Add padding if need
    if (minute.length < 2) {
      minute = '0' + minute;
    }
    // Add Sign in final result
    sign = sign == 1 ? '' : '0';
    // Concate hours and minutes
    let time = sign + hour + ':' + minute;
    return time;
  }

  //calculate air used
  const airUsed = (tankStart - tankEnd) * tankSize;
  const diveTimeMinutes = -1 * diveFloatTime * 60;
  const litersPerMin = (
    airUsed /
    diveTimeMinutes /
    (maxDepth / 10 + 1)
  ).toFixed(1);




  return (
    <div className="log">
      <div className="log-header">
        <h3>
          Log#{log} - {title} - {processedDate}
        </h3>
      </div>
      <div className="log-data">
        <span id="createdBy-span">
          Created By: <span>{createdBy}</span>
        </span>
        <span id="timeIn-span">
          Time In: <span>{timeIn}</span>
        </span>
        <span id="timeOut-span">
          Time Out: <span>{timeOut}</span>
        </span>
        <span id="diveTime-span">
          Dive Time: <span>{diveTime}</span>
        </span>
        <span id="diveSite-span">
          Dive Site: <span>{diveSite}</span>
        </span>
        <span id="maxDepth-span">
          Max Depth: <span>{maxDepth}</span> m
        </span>
        <span id="avgDepth-span">
          Avg Depth: <span>{avgDepth}</span> m
        </span>
        <span id="temp-span">
          Temp: <span>{temperature}</span> °C
        </span>
        <span id="tankStart-span">
          Tank Start: <span>{tankStart}</span> bar
        </span>
        <span id="tankEnd-span">
          Tank End: <span>{tankEnd}</span> bar
        </span>
        <span id="airUsed-span">
          Air Used: <span>{litersPerMin}</span> Lt/min
        </span>
        <span id="buddies-span">
          Buddies: <span>{buddies}</span>
        </span>
        <div className="log-edit-delete" id="logBtns-span">
          <span
            id={log}
            className="log-delete-btn"
            onClick={props.deleteLog}
          >
            Delete
          </span>
          <span className="log-edit-btn">Edit</span>
        </div>
        <span id="diveComments-span">
          Dive Comments: <span>{diveComments}</span>
        </span>
      </div>
    </div>
  );
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
