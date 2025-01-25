import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const CupsSavedChart = () => {
  const [cupsSaved, setCupsSaved] = useState(0);
  const [showAwareness, setShowAwareness] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCupsSaved(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cups Saved',
        data: [1200, 1900, 3000, 5000, 8200, cupsSaved],
        fill: true,
        borderColor: '#34D399',
        backgroundColor: 'rgba(52, 211, 153, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-4xl font-bold text-green-400">
          {cupsSaved.toLocaleString()}
        </div>
        <button
          onClick={() => setShowAwareness(!showAwareness)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Info size={20} />
          Learn More
        </button>
      </div>
      <Line data={data} options={options} />
      
      {showAwareness && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-4 bg-gray-800 rounded-lg p-6 shadow-xl z-10"
        >
          <h3 className="text-xl font-bold mb-4">How to Reduce Cup Waste</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              Bring your own reusable cup to cafes (Many offer discounts!)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              Choose establishments that use biodegradable cups
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              Encourage your workplace to provide reusable cups
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              Start a cup-sharing program in your community
            </li>
          </ul>
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-300">
              Did you know? A single person switching to reusable cups can save over 500 disposable cups from landfills each year!
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};