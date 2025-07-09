import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import '../css/Chart.css';

const data = [
  { month: 'Jan', appointments: 400 },
  { month: 'Feb', appointments: 700 },
  { month: 'Mar', appointments: 800 },
  { month: 'Apr', appointments: 650 },
  { month: 'May', appointments: 950 },
  { month: 'Jun', appointments: 1100 },
];

const AppointmentsChart = () => {
  return (
    <section className="chart-section" data-aos="fade-up">
      <h2>Monthly Appointments</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="appointments" stroke="#4db6e2" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default AppointmentsChart;
