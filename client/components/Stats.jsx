//client/components/Stats.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, PieChart, Pie, BarChart, Bar, Legend } from 'recharts';

const data = [
    {name: 'Page A', uv: 300, pv: 240, amt: 2400},
    {name: 'Page B', uv: 200, pv: 140, amt: 2400},
    {name: 'Page C', uv: 600, pv: 240, amt: 2400},
    {name: 'Page D', uv: 350, pv: 440, amt: 2400},
    {name: 'Page E', uv: 300, pv: 640, amt: 2400},
    {name: 'Page F', uv: 450, pv: 640, amt: 2400},
    {name: 'Page G', uv: 105, pv: 340, amt: 2400},
    {name: 'Page H', uv: 250, pv: 440, amt: 2400},

];

const Stats = () => {

    return(
        <div className="stats-section">
            <Navbar />
            <div className="stats-container">
                <h1>Stats</h1>
                <AreaChart width={800} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                <BarChart width={800} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    )
}

export default Stats;