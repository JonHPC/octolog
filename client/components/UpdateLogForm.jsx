
//client/components/UpdateLog.jsx
import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useForm} from 'react-hook-form';

//custom hook for handling inputs
const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    // return the value with the onChange function instead of setValue function
    return [ value, onChange ];
  };

const UpdateLogForm = (props) => {
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
    

    // const [log, setLog] = useForm(props.log);
    // const [title, setTitle] = useForm('');
    // const [createdOn, setCreatedOn] = useForm('');
    // const [createdBy, setCreatedBy] = useState(1);
    // const [diveSite, setDiveSite] = useForm('');
    // const [maxDepth, setMaxDepth] = useForm('');
    // const [avgDepth, setAvgDepth] = useForm('');
    // const [timeIn, setTimeIn] = useForm('');
    // const [timeOut, setTimeOut] = useForm('');
    // const [temperature, setTemperature] = useForm('');
    // const [tankStart, setTankStart] = useForm('');
    // const [tankEnd, setTankEnd] = useForm('');
    // const [buddies, setBuddies] = useForm('');
    // const [diveComments, setDiveComments] = useForm('');

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
            fetch(`/logs/${log}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify(logObj)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('UpdateLog.jsx PATCH data: ', data)
                alert('Log updated!')
                
            })
            .catch(err =>{
                console.log('UpdateLog.jsx PATCH ERROR: ', err)
            })
        }
    }


    return(
        <div>
            <div className="update-log-form">
                <h3>Edit Log</h3>
                <form className="form-form" onSubmit={saveLog}>
                    <label htmlFor="log">Log#*</label>
                    <input type="number" id="log" name="log" placeholder="99" onChange={setLog} required/>
                    <label htmlFor="title">Title*</label>
                    <input type="text" id="title" name="title" placeholder="Catalina Island" onChange={setTitle} required/>
                    <label htmlFor="createdOn">Created On*</label>
                    <input type="date" id="createdOn" name="createdOn" onChange={setCreatedOn} required/>
                    <label htmlFor="diveSite">Dive Site</label>
                    <input type="text" id="diveSite" name="diveSite" placeholder="Casino Point" onChange={setDiveSite}/>
                    <label htmlFor="timeIn">Time In*</label>
                    <input type="time" id="timeIn" name="timeIn" onChange={setTimeIn} required/>
                    <label htmlFor="timeOut">Time Out*</label>
                    <input type="time" id="timeOut" name="timeOut" onChange={setTimeOut} required/>
                    <label htmlFor="maxDepth">Max Depth (m)</label>
                    <input type="number" id="maxDepth" name="maxDepth" placeholder="15.0" onChange={setMaxDepth} step="0.01"/>
                    <label htmlFor="avgDepth">Average Depth (m)</label>
                    <input type="number" id="avgDepth" name="avgDepth" placeholder="10.5" onChange={setAvgDepth} step="0.01"/>
                    <label htmlFor="tankStart">Tank Start (bar)</label>
                    <input type="number" id="tankStart" name="tankStart" placeholder="200" onChange={setTankStart}/>
                    <label htmlFor="tankEnd">Tank End (bar)</label>
                    <input type="number" id="tankEnd" name="tankEnd" placeholder="70" onChange={setTankEnd}/>
                    <label htmlFor="temperature">Temperature (°C)</label>
                    <input type="number" id="temperature" name="temperature" placeholder="19.0" onChange={setTemperature} step="0.1"/>
                    <label htmlFor="buddies">Buddies</label>
                    <input type="text" id="buddies" name="buddies" placeholder="Buddy" onChange={setBuddies}/>
                    <label htmlFor="diveComments">Comments</label>
                    <input type="text" id="diveComments" name="diveComments" placeholder="Lots of fish!" onChange={setDiveComments}></input>
                    <input id="save-btn" className="submit-btn" type="submit" value="Save"></input>
                </form>
            </div>
        </div>
        
    )
}

export default UpdateLogForm;