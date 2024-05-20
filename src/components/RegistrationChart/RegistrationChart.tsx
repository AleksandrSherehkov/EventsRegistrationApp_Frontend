import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface RegistrationChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

export const RegistrationChart: React.FC<RegistrationChartProps> = ({
  data,
}) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Registrations per Day',
        data: data.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="w-full h-[200px] my-5 mx-auto md:w-[728px] lg:w-[800px]">
      <Line data={chartData} options={options} />
    </div>
  );
};
