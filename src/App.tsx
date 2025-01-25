import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Coffee, Leaf, TreePine, Recycle } from 'lucide-react';
import { CupsSavedChart } from './components/CupsSavedChart';
import { EmissionsChart } from './components/EmissionsChart';
import { ReusableMetrics } from './components/ReusableMetrics';
import { MLPredictions } from './components/MLPredictions';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Sustainable Future Metrics
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track our collective impact on the environment through real-time data and analytics
          </p>
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, rgba(0,0,0,0) 70%)',
            transform: `scale(${1 + scrollY * 0.001})`,
          }}
        />
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cups Saved Metric */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Coffee className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-2xl font-semibold">Cups Saved</h2>
            </div>
            <CupsSavedChart />
          </div>

          {/* CO2 Emissions */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Leaf className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-2xl font-semibold">CO₂ Emissions Reduced</h2>
            </div>
            <EmissionsChart />
          </div>

          {/* Reusable Cups Metrics */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Recycle className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-2xl font-semibold">Reusable Cups Usage</h2>
            </div>
            <ReusableMetrics />
          </div>

          {/* ML Predictions */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <TreePine className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-2xl font-semibold">Sustainability Predictions</h2>
            </div>
            <MLPredictions />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;