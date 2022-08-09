//client/components/Navbar.jsx
import React, {useState} from 'react';

function Navbar(props) {


    return(
        <div className="navbar">
            <h1>Octolog</h1>
            <ul>
                <li>Log</li>
                <li>Stats</li>
                <li>Map</li>
            </ul>
        </div>
    )
}

export default Navbar;