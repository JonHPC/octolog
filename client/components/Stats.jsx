//client/components/Stats.jsx
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar.jsx';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, PieChart, Pie, BarChart, Bar, Legend, LabelList } from 'recharts';

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
    {log:1, max:-11.1, avg:-7.8},
    {log:2, max:-12.1, avg:-6.9},
    {log:3, max:-14.3, avg:-8.4},
    {log:4, max:-19.8, avg:-11.2},
    {log:5, max:-14.6, avg:-9.3},
    {log:6, max:-12.7, avg:-8},
    {log:7, max:-15.4, avg:-9.7},
    {log:8, max:-12.7, avg:-10.5},
    {log:9, max:-15.2, avg:-9.7},
    {log:10, max:-4.5, avg:-3.2},
]

const Stats = (props) => {
    const [data, setData] = useState()
    const [depthData, setDepthData] = useState(props.depthData)
    const [airData, setAirData] = useState(props.airData)
    const [timeData, setTimeData] = useState(props.timeData)

    // useEffect(()=>{
    //     console.log('useEffect stat.jsx depthData: ', depthData)
    // },[])

    // useEffect(()=>{
    //     //code runs on component mount
    //     console.log('Stats.jsx useEffect ran')
    //     fetch('/logs')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log('parsing data')
    //         parseData(data)
    //     })
    //     .catch((err) =>
    //       console.log('Stats useEffect: GET log: ERROR: ', err)
    //     );
    // }, [])
    //the empty array runs this once, pass more values into the array to run more

    //function to iterate through the data, constructing other data arrays
//     const parseData = (data) => {
//         //iterate and process depth data
//         for(let i = data.length-1; i >= 0; i--){
//             //process depth data, multiply by -1 to make the graph look better
//             const depth = {
//                 log: data[i].log_id,
//                 max: parseFloat(data[i].max_depth * -1),
//                 avg: parseFloat(data[i].avg_depth * -1)
//             }
//             depthData.push(depth)
//             setDepthData(depthData);

//             //process time data
//             //calculate dive time
//             const floatTimeIn = timeStringToFloat(data[i].time_in);
//             const floatTimeOut = timeStringToFloat(data[i].time_out);
//             const diveFloatTime = floatTimeIn - floatTimeOut;
//             const diveTime = convertNumToTime(diveFloatTime);
//             const time = {
//                 log: data[i].log_id,
//                 diveTime: diveTime
//             }
//             timeData.push(time)
//             setTimeData(timeData)

//             //process air data
//             //calculate air used
//             const airUsed = (data[i].tank_start - data[i].tank_end) * 11.1;
//             const diveTimeMinutes = -1 * diveFloatTime * 60;
//             const litersPerMin = (
//                 airUsed /
//                 diveTimeMinutes /
//                 (data[i].max_depth / 10 + 1)
//             ).toFixed(1);
//             const air = {
//                 log: data[i].log_id,
//                 litersPerMin: parseFloat(litersPerMin)
//             }
//             airData.push(air)
//             setAirData(airData)
//         }
//         console.log('depthData: ', depthData)
//         console.log('airData: ', airData)
//         console.log('timeData: ', timeData)
//     }

   

//   //function to convert time to float
//   function timeStringToFloat(time) {
//     let hoursMinutes = time.split(/[.:]/);
//     let hours = parseInt(hoursMinutes[0], 10);
//     let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
//     return (hours + minutes / 60).toFixed(2);
//   }

//   //function to convert float time back to float
//   function convertNumToTime(number) {
//     // Check sign of given number
//     var sign = number >= 0 ? 1 : -1;
//     // Set positive value of number of sign negative
//     number = number * sign;
//     // Separate the int from the decimal part
//     var hour = Math.floor(number);
//     var decpart = number - hour;
//     var min = 1 / 60;
//     // Round to nearest minute
//     decpart = min * Math.round(decpart / min);
//     var minute = Math.floor(decpart * 60) + '';
//     // Add padding if need
//     if (minute.length < 2) {
//       minute = '0' + minute;
//     }
//     // Add Sign in final result
//     sign = sign == 1 ? '' : '0';
//     // Concate hours and minutes
//     let time = sign + hour + ':' + minute;
//     return time;
//   }


// colors
//purple:#8884d8
//green:#82ca9d
    return(
        <div className="stats-section">
            {/* <Navbar /> */}
            <div className="stats-container">
                <div>
                    <h3>Max/Avg depth</h3>
                    <AreaChart width={700} height={400} data={depthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a78bfa" stopOpacity={0}/>
                            <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.7}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ade80" stopOpacity={0}/>
                            <stop offset="95%" stopColor="#4ade80" stopOpacity={0.7}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#64748b" strokeDasharray="3 3"/>
                        <XAxis dataKey="log" stroke='#94a3b8'/>
                        <YAxis label={{value:"Meters", angle:-90, stroke:'#e2e8f0'}} stroke='#94a3b8'/>
                        {/* <Tooltip/> */}
                        <Legend />
                        <Area type="monotone" dataKey="max" stroke="#a78bfa" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="avg" stroke="#4ade80" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div>
                    <h3>Air Usage</h3>
                    <BarChart width={700} height={400} data={airData}>
                        {/* <CartesianGrid stroke="#64748b" strokeDasharray="3 3" /> */}
                        <XAxis dataKey="log" stroke='#94a3b8'/>
                        <YAxis label={{value:"Lt/min", angle:-90, stroke:'#e2e8f0'}} stroke='#94a3b8'/>
                        <Legend />
                        <Bar dataKey="litersPerMin" fill="#d8bf73" fillOpacity={1}>
                            <LabelList dataKey="litersPerMin" position="top" stroke="#e2e8f0"/>
                        </Bar>
                        {/* <Bar dataKey="avg" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
                <div>
                    <h3>Dive Time</h3>
                    <LineChart width={700} height={400} data={timeData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid stroke="#64748b" strokeDasharray="3 3" />
                        <XAxis dataKey="log" stroke='#94a3b8'/>
                        <YAxis  label={{value:"Minutes", angle:-90, stroke:'#e2e8f0'}}stroke='#94a3b8'/>
                        {/* <Tooltip /> */}
                        <Legend />
                        <Line type="monotone" dataKey="diveTime" stroke="#f87171" />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}

export default Stats;