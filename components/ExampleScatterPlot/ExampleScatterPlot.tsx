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

          // Start in the middle of our chart
          const xPosition = chart.chartArea.left + (chart.chartArea.width / 2);
          const yPosition = chart.chartArea.bottom - (chart.chartArea.height / 2);

          // Draw a horizontal green line across the middle
          ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)'; // Set line color to green
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(chart.chartArea.left, yPosition);
          ctx.lineTo(chart.chartArea.right, yPosition);
          ctx.stroke();

          // Draw vertical line top to bottom
          ctx.beginPath();
          ctx.moveTo(xPosition, chart.chartArea.top);
          ctx.lineTo(xPosition, chart.chartArea.bottom);
          ctx.stroke();

          // Add text just under and to the right of the green line
          const text = 'Baseline';
          const textWidth = ctx.measureText(text).width;
          const textX = chart.chartArea.right - textWidth - 5; // Position the text to the right of the chart
          const textY = yPosition + 5;
          ctx.fillStyle = 'black'; // Set text color to black
          ctx.font = '12px Arial';
          ctx.fillText(text, textX, textY); // Add text near the line

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
