//components/client/StatCalc.jsx
import React, {Component} from 'react';
import Stats from './Stats.jsx';
import Navbar from './Navbar.jsx';

class StatCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            fetchedLogs: false,
            logs: [],
            depthData: [],
            airData: [],
            timeData: []
        }
        this.parseData = this.parseData.bind(this)
        this.timeStringToFloat = this.timeStringToFloat.bind(this)
        this.convertNumToTime = this.convertNumToTime.bind(this)
    }

    componentDidMount(){
        fetch('/logs')
        .then((res) => res.json())
        .then((logs) => {
          if (!Array.isArray(logs)) {
            logs = [];
          }
          this.parseData(logs)
        })
        .catch((err) =>
          console.log('StatCalc.jsx.componentDidMount: GET log: ERROR: ', err)
        );
    }


    //function to iterate through the data, constructing other data arrays
    parseData(data){
        //iterate and process depth data
        for(let i = data.length-1; i >= 0; i--){
            //process depth data, multiply by -1 to make the graph look better
            const depth = {
                log: data[i].log_id,
                max: parseFloat(data[i].max_depth * -1),
                avg: parseFloat(data[i].avg_depth * -1)
            }
            this.state.depthData.push(depth)
            

            //process time data
            //calculate dive time
            const floatTimeIn = this.timeStringToFloat(data[i].time_in);
            const floatTimeOut = this.timeStringToFloat(data[i].time_out);
            const diveFloatTime = floatTimeIn - floatTimeOut;
            const diveTime = Math.abs(diveFloatTime * 60).toFixed(0)
            //const diveTime = this.convertNumToTime(diveFloatTime);
            const time = {
                log: data[i].log_id,
                diveTime: parseFloat(diveTime)
            }
            this.state.timeData.push(time)
            

            //process air data
            //calculate air used
            const airUsed = (data[i].tank_start - data[i].tank_end) * 11.1;
            const diveTimeMinutes = -1 * diveFloatTime * 60;
            const litersPerMin = (
                airUsed /
                diveTimeMinutes /
                (data[i].max_depth / 10 + 1)
            ).toFixed(1);
            const air = {
                log: data[i].log_id,
                litersPerMin: parseFloat(litersPerMin)
            }
            this.state.airData.push(air)
            
        }
        this.setState({
            depthData: this.state.depthData,
            airData: this.state.airData,
            timeData: this.state.timeData,
            fetchedLogs : true
        })

        //console.log('statcalc depthData: ', this.state.depthData)
        //console.log('airData: ', this.state.airData)
        //console.log('timeData: ', this.state.timeData)
    }

   

  //function to convert time to float
  timeStringToFloat(time) {
    let hoursMinutes = time.split(/[.:]/);
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return (hours + minutes / 60).toFixed(2);
  }

  //function to convert float time back to float
  convertNumToTime(number) {
    // Check sign of given number
    let sign = number >= 0 ? 1 : -1;
    // Set positive value of number of sign negative
    number = number * sign;
    // Separate the int from the decimal part
    let hour = Math.floor(number);
    let decpart = number - hour;
    let min = 1 / 60;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    let minute = Math.floor(decpart * 60) + '';
    // Add padding if need
    if (minute.length < 2) {
      minute = '0' + minute;
    }
    // Add Sign in final result
    sign = sign == 1 ? '' : '0';
    // Concate hours and minutes
    let time = sign + hour + ':' + minute;
    return time;
  }



    render() {

        //add loading text while logs are loading
        if (!this.state.fetchedLogs) {
            return (
            <div className="log-container">
                <Navbar />
                <h2>Loading data, please wait...</h2>
            </div>
            );
        }

        return(
            <div>
                <Navbar />
                {this.state.depthData && <Stats depthData = {this.state.depthData} airData={this.state.airData} timeData={this.state.timeData}/>}
            </div>
        )
    }





}



export default StatCalc;