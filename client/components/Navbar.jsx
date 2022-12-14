//client/components/Navbar.jsx
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <div className="navbar">
            <Link to='/' id="octolog-link">Octolog</Link>
            <ul>
                <Link to='/addlog' id="addLog-link">Add Log</Link>
                <Link to='/' className="nav-btn" id="map-link">Logs</Link>
                <Link to='/stats' className="nav-btn" id="stats-link">Stats</Link>
                <Link to='/login' className="nav-btn" id="login-link">Login</Link>
            </ul>
        </div>
    )
}

export default Navbar;