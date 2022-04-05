import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 100401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 204500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 671010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 400405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 510900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 610000
        }
    ];

    const shadow = {
        boxShadow: "10px 10px 20px rgba(214,214,214, 0.3), -10px -10px 20px rgba(214,214,214, 0.3)",
        borderRadius: '10px'
    }

    return (
        <section className=" p-6">
            <h1 className='text-center text-6xl font-bold  pb-12'>CHARTS</h1>
            <div className='md:flex md:flex-wrap md:justify-around items-center md:h-screen'>

                <div style={shadow} className='pr-2 mb-4 bg-stone-100'>
                    <LineChart width={500}
                        height={300} data={data}  >
                        <Line dataKey={'investment'} stroke="#ffbf00" fill='#ffbf00'></Line>
                        <Line dataKey={'revenue'} stroke="#00bfff" fill="#00bfff"></Line>
                        <Line dataKey={'sell'} fill="#8884d8" stroke="#8884d8" ></Line>
                        <XAxis dataKey={'month'} fill="	#ff00ff" ></XAxis>
                        <YAxis ></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>

                <div style={shadow} className='bg-stone-100'>
                    <ComposedChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend type="monotone" />
                        <Area dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#00bfff" />
                        <Line type="monotone" dataKey="investment" stroke="#ffbf00" />
                        <Scatter dataKey="month" fill="	#ff00ff" />
                    </ComposedChart>
                </div>
            </div>

        </section >
    );
};

export default Dashboard;