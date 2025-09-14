import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Sales",
    },
  },
};



const Analytics = () => {
  return (
    <div className='  w-[95rem] h-[52rem] m-5 mt-1 p-5 rounded-lg  backdrop-blur-lg  bg-gray-100 backdrop-opacity-60000 shadow-4xl '>
      <h1 className='text-4xl font-bold m-5 p-5'>Analytics Page</h1>
      <p className='m-5 p-5 text-lg'>This is the Analytics page where you can view various analytics and reports.</p>
      <div className='m-5 p-5'>
        <h2 className='text-2xl font-bold mb-5'>Analytics</h2>
        <div className="w-[90rem] flex justify-center h-[40rem] align-center ">
          <div className=" bg-red-500 h-40 p-2 rounded-lg shadow-4xl ">
            <Bar options={options} data={data} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Analytics