//client/components/Navbar.jsx
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <div className="navbar">
            <Link to='/'>Octolog</Link>
            <ul>
                <Link to='/addlog'>Add Log</Link>
                <li>Stats</li>
                <li>Map</li>
            </ul>
        </div>
    )
}

export default Navbar;