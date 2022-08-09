//client/components/App.js
import React, {Component} from 'react';
import Navbar from './Navbar.js';
import LogContainer from './LogContainer.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {

        return(
            <div className="app">
                <Navbar />
                <LogContainer />
            </div>
        )
    }
}

export default App;