import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

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
  useEffect(() => {
    const chartInstance = new ChartJS('myExampleScatterPlot', {
      type: 'scatter',
      data: data,
      options: options,
      plugins: [{
        id: 'customLines',
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)'; // Set line color to green
          ctx.lineWidth = 2;
          ctx.beginPath();
          const yPosition = chart.chartArea.bottom - (chart.chartArea.height / 2);
          ctx.moveTo(chart.chartArea.left, yPosition);
          ctx.lineTo(chart.chartArea.right, yPosition);
          ctx.stroke();
        },
      }],
    });

    return () => {
      // Cleanup the chart instance if component is unmounted
      chartInstance.destroy();
    };
  }, []);

  return <canvas id="myExampleScatterPlot" />;
}
