//client/components/LogContainer.jsx
import React, {Component} from 'react';
import Log from './Log.jsx';

class LogContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            fetchedLogs: false,
            logs: [],
        }
        
    };
    
    
    //fetch data once this component mounts
    componentDidMount() {
        //console.log('LogContainer.jsx mounted')
        fetch('/logs')
        .then(res => res.json())
        .then((logs) => {
            //console.log('LogContainer.jsx logs: ', logs);
            if(!Array.isArray(logs)){
                logs = []
            }
            return this.setState({
                logs,
                fetchedLogs : true
            });
        })
        .catch(err => console.log('LogContainer.componentDidMount: get log: ERROR: ', err));
    }


    render() {

        //add loading text while logs are loading
        if(!this.state.fetchedLogs){
            return (
                <div className="log-container">
                    <h2>Loading data, please wait...</h2>
                </div>
            )
        }

        //perform object deconstruction and save to a const 
        const { logs } = this.state;

        //check if logs has content
        if(!logs) return null;

        //check if logs has length
        if(!logs.length) {
            return (
                <div className="log-container">
                    <h2>There are currently no logs...</h2>
                </div>
            )
        }
        
        //iterate through all of the logs, and push into an array to be rendered
        const logsToRender = []

        for(let i = 0; i < logs.length; i++){
            logsToRender.push(
                <Log 
                    key={logs[i].log_id}
                    log={logs[i].log_id} 
                    title={logs[i].title}
                    createdOn={logs[i].created_on}
                    createdBy={logs[i].user_id}
                    diveSite={logs[i].dive_site}
                    maxDepth={logs[i].max_depth}
                    avgDepth={logs[i].avg_depth}
                    timeIn={logs[i].time_in}
                    timeOut={logs[i].time_out}
                    temperature={logs[i].temperature}
                    tankStart={logs[i].tank_start}
                    tankEnd={logs[i].tank_end}
                    buddies={logs[i].buddies}
                    diveComments={logs[i].dive_comments}
                />
            )
            }

        return(
            <div className='log-container'>
                <button>Add log</button>
                {logsToRender}
            </div>
        )

        }
        
}

export default LogContainer;