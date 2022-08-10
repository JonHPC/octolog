//client/components/AddLog.jsx
import React, {useState, useEffect} from 'react';
import {Link, withRouter, useNavigate} from 'react-router-dom';
import Navbar from './Navbar.jsx';

//custom hook for handling inputs
const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    // return the value with the onChange function instead of setValue function
    return [ value, onChange ];
  };

const AddLog = (props) => {
    const [log, setLog] = useInput('');
    const [title, setTitle] = useInput('');
    const [createdOn, setCreatedOn] = useInput('');
    const [createdBy, setCreatedBy] = useState(1);
    const [diveSite, setDiveSite] = useInput('');
    const [maxDepth, setMaxDepth] = useInput('');
    const [avgDepth, setAvgDepth] = useInput('');
    const [timeIn, setTimeIn] = useInput('');
    const [timeOut, setTimeOut] = useInput('');
    const [temperature, setTemperature] = useInput('');
    const [tankStart, setTankStart] = useInput('');
    const [tankEnd, setTankEnd] = useInput('');
    const [buddies, setBuddies] = useInput('');
    const [diveComments, setDiveComments] = useInput('');

    //redirect forms upon submit
    const navigate = useNavigate();

    //saves the log when submit button pressed
    const saveLog = (e) => {
        console.log('saveLog log: ', log)
        e.preventDefault()
        if(title === '' || log === '' || !createdOn || !timeIn || !timeOut){
            alert('A please fill out the required fields!')
        }else{
            const logObj = {
                log,
                title,
                createdOn,
                createdBy,
                diveSite,
                maxDepth,
                avgDepth,
                timeIn,
                timeOut,
                temperature,
                tankStart,
                tankEnd,
                buddies,
                diveComments
            };
            fetch('/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify(logObj)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('AddLog.jsx POST data: ', data)
                alert('Log added!')
            })
            .then(()=>{
                navigate('/', {replace:true})
            })
            .catch(err =>{
                console.log('AddLog.jsx POST ERROR: ', err)
            })
        }
    }


    return(
        <div className>
            <Navbar/>
            <div className="add-log">
                <h1>Add Log</h1>
                <form className="form" onSubmit={saveLog}>
                    <label htmlFor="log">Log#*</label><br></br>
                    <input type="number" id="log" name="log" placeholder="99" onChange={setLog} required/><br></br>
                    <label htmlFor="title">Title*</label><br></br>
                    <input type="text" id="title" name="title" placeholder="Catalina Island" onChange={setTitle} required/><br></br>
                    <label htmlFor="createdOn">Created On*</label><br></br>
                    <input type="date" id="createdOn" name="createdOn" onChange={setCreatedOn} required/><br></br>
                    <label htmlFor="timeIn">Time In*</label><br></br>
                    <input type="time" id="timeIn" name="timeIn" onChange={setTimeIn} required/><br></br>
                    <label htmlFor="timeOut">Time Out*</label><br></br>
                    <input type="time" id="timeOut" name="timeOut" onChange={setTimeOut} required/><br></br>
                    <label htmlFor="diveSite">Dive Site</label><br></br>
                    <input type="text" id="diveSite" name="diveSite" placeholder="Casino Point" onChange={setDiveSite}/><br></br>
                    <label htmlFor="maxDepth">Max Depth (m)</label><br></br>
                    <input type="number" id="maxDepth" name="maxDepth" placeholder="15.0" onChange={setMaxDepth} step="0.01"/><br></br>
                    <label htmlFor="avgDepth">Average Depth (m)</label><br></br>
                    <input type="number" id="avgDepth" name="avgDepth" placeholder="10.5" onChange={setAvgDepth} step="0.01"/><br></br>
                    <label htmlFor="temperature">Temperature (°C)</label><br></br>
                    <input type="number" id="temperature" name="temperature" placeholder="19.0" onChange={setTemperature} step="0.1"/><br></br>
                    <label htmlFor="tankStart">Tank Start (bar)</label><br></br>
                    <input type="number" id="tankStart" name="tankStart" placeholder="200" onChange={setTankStart}/><br></br>
                    <label htmlFor="tankEnd">Tank End (bar)</label><br></br>
                    <input type="number" id="tankEnd" name="tankEnd" placeholder="70" onChange={setTankEnd}/><br></br>
                    <label htmlFor="buddies">Buddies</label><br></br>
                    <input type="text" id="buddies" name="buddies" placeholder="Buddy" onChange={setBuddies}/><br></br>
                    <label htmlFor="diveComments">Comments</label><br></br>
                    <textarea id="diveComments" name="diveComments" rows="4" cols="50" placeholder="Visibility: ~7m. Tank Size:11.1L. Light current" onChange={setDiveComments}></textarea><br></br>
                    <input className="submit-btn" type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
    )
}

export default AddLog;