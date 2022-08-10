//client/components/AddLog.jsx
import React, {useState} from 'react';

function AddLog(props) {


    return(
        <div className="add-log">
            <h1>Add Log</h1>
            <form>
                <label htmlFor="title">Title:</label><br></br>
                <input type="text" id="title" name="title" /><br></br>
                <label htmlFor="created-on">Created On:</label><br></br>
                <input type="date" id="created-on" name="created-on" /><br></br>
            </form>
        </div>
    )
}

export default AddLog;