//client/components/Stats.jsx
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar.jsx';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, PieChart, Pie, BarChart, Bar, Legend } from 'recharts';

const data1 = [
    {name: 'Page A', uv: 300, pv: 240, amt: 2400},
    {name: 'Page B', uv: 200, pv: 140, amt: 2400},
    {name: 'Page C', uv: 600, pv: 240, amt: 2400},
    {name: 'Page D', uv: 350, pv: 440, amt: 2400},
    {name: 'Page E', uv: 300, pv: 640, amt: 2400},
    {name: 'Page F', uv: 450, pv: 640, amt: 2400},
    {name: 'Page G', uv: 105, pv: 340, amt: 2400},
    {name: 'Page H', uv: 250, pv: 440, amt: 2400},
];

const testDepth = [
]

const Stats = () => {
    const [data, setData] = useState()
    const [depthData, setDepthData] = useState([])
    const [airData, setAirData] = useState([])
    const [timeData, setTimeData] = useState([])

    useEffect(()=>{
        //code runs on component mount
        console.log('Stats.jsx useEffect ran')
        fetch('/logs')
        .then((res) => res.json())
        .then((data) => {
            //console.log('Stats data: ', data)
            parseData(data)
        })
        .catch((err) =>
          console.log('Stats useEffect: GET log: ERROR: ', err)
        );
    }, [])
    //the empty array runs this once, pass more values into the array to run more

    //function to iterate through the data, constructing other data arrays
    const parseData = (data) => {
        //iterate and process depth data
        for(let i = data.length-1; i >= 0; i--){
            //process depth data
            const depth = {
                log: data[i].log_id,
                max: parseFloat(data[i].max_depth),
                avg: parseFloat(data[i].avg_depth)
            }
            setDepthData(depthData.push(depth));

            //process time data
            //calculate dive time
            const floatTimeIn = timeStringToFloat(data[i].time_in);
            const floatTimeOut = timeStringToFloat(data[i].time_out);
            const diveFloatTime = floatTimeIn - floatTimeOut;
            const diveTime = convertNumToTime(diveFloatTime);
            const time = {
                log: data[i].log_id,
                diveTime: diveTime
            }
            setTimeData(timeData.push(time))

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
            setAirData(airData.push(air))
        }
        console.log('depthData: ', depthData)
        console.log('airData: ', airData)
        console.log('timeData: ', timeData)
    }

  

  //function to convert time to float
  function timeStringToFloat(time) {
    let hoursMinutes = time.split(/[.:]/);
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return (hours + minutes / 60).toFixed(2);
  }

  //function to convert float time back to float
  function convertNumToTime(number) {
    // Check sign of given number
    var sign = number >= 0 ? 1 : -1;
    // Set positive value of number of sign negative
    number = number * sign;
    // Separate the int from the decimal part
    var hour = Math.floor(number);
    var decpart = number - hour;
    var min = 1 / 60;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    var minute = Math.floor(decpart * 60) + '';
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

    

    return(
        <div className="stats-section">
            <Navbar />
            <div className="stats-container">
                <h1>Stats</h1>
                <h3>Dive Time</h3>
                <h3>Max/Avg depth</h3>
                <AreaChart width={800} height={400} data={depthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="log" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="max" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="avg" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                <h3>Air Usage</h3>
                <BarChart width={800} height={400} data={airData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="log" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="litersPerMin" fill="#8884d8" />
                    {/* <Bar dataKey="avg" fill="#82ca9d" /> */}
                </BarChart>
                <h3>Temperature</h3>
                
            </div>
        </div>
    )
}

export default Stats;