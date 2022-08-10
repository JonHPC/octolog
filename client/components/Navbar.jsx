//client/components/Navbar.jsx
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <div className="navbar">
            <Link to='/' id="octolog-link">Octolog</Link>
            <ul>
                <Link to='/addlog' id="addLog-link">Add Log</Link>
                <Link to='/' className="nav-btn" id="stats-link">Stats</Link>
                <Link to='/' className="nav-btn" id="map-link">Map</Link>
                <Link to='/' className="nav-btn" id="profile-link">Profile</Link>
            </ul>
        </div>
    )
}

export default Navbar;