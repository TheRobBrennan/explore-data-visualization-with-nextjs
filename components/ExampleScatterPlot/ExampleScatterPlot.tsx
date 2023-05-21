import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Randomized data',
      data: Array.from({ length: 100 }, () => ({
        x: Math.floor(Math.random() * ((100 * 2) + 1)) - 100, // -100 to 100
        y: Math.floor(Math.random() * ((42.5 * 2) + 1)) - 42.5, // -42.5 to 42.5
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export default function ExampleScatterPlot() {
  return <Scatter options={options} data={data} />;
}
