//client/components/AddLog.jsx
import React, {useState} from 'react';

function AddLog(props) {


    return(
        <div className="add-log">
            <h1>Add Log</h1>
            <form className="form">
                <label htmlFor="title">Title</label><br></br>
                <input type="text" id="title" name="title" placeholder="Catalina Island"/><br></br>
                <label htmlFor="created-on">Created On</label><br></br>
                <input type="date" id="created-on" name="created-on" /><br></br>
                <label htmlFor="dive-site">Dive Site</label><br></br>
                <input type="text" id="dive-site" name="dive-site" placeholder="Casino Point"/><br></br>
                <label htmlFor="max-depth">Max Depth (m)</label><br></br>
                <input type="number" id="max-depth" name="max-depth" placeholder="15.0"/><br></br>
                <label htmlFor="avg-depth">Average Depth (m)</label><br></br>
                <input type="number" id="avg-depth" name="avg-depth" placeholder="10.5"/><br></br>
                <label htmlFor="time-in">Time In</label><br></br>
                <input type="time" id="time-in" name="time-in" /><br></br>
                <label htmlFor="time-out">Time Out</label><br></br>
                <input type="time" id="time-out" name="time-out" /><br></br>
                <label htmlFor="temperature">Temperature (°C)</label><br></br>
                <input type="number" id="temperature" name="temperature" placeholder="19.0"/><br></br>
                <label htmlFor="tank-start">Tank Start (bar)</label><br></br>
                <input type="number" id="tank-start" name="tank-start" placeholder="200"/><br></br>
                <label htmlFor="tank-end">Tank End (bar)</label><br></br>
                <input type="number" id="tank-end" name="tank-end" placeholder="70"/><br></br>
                <label htmlFor="buddies">Buddies</label><br></br>
                <input type="text" id="buddies" name="buddies" placeholder="Buddy"/><br></br>
                <label htmlFor="comments">Comments</label><br></br>
                <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Visibility: ~7m. Tank Size:11.1L. Light current"></textarea><br></br>
                <input className="submit-btn" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default AddLog;