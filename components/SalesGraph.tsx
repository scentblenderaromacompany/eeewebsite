import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesGraph = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Sales',
        data: data.map(item => item.sales),
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <Line data={chartData} options={{ maintainAspectRatio: false }} height={300} />
    </div>
  );
};

export default SalesGraph;
