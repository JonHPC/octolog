//client/components/App.jsx
import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import LogContainer from './LogContainer.jsx';

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