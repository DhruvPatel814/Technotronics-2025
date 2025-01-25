import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export const MLPredictions = () => {
  const [predictions, setPredictions] = useState({
    nextMonthSavings: 0,
    yearEndProjection: 0,
    sustainabilityScore: 0,
  });
  const [showAwareness, setShowAwareness] = useState(false);

  useEffect(() => {
    const updatePredictions = () => {
      setPredictions({
        nextMonthSavings: Math.floor(Math.random() * 5000) + 5000,
        yearEndProjection: Math.floor(Math.random() * 50000) + 50000,
        sustainabilityScore: Math.floor(Math.random() * 30) + 70,
      });
    };

    const interval = setInterval(updatePredictions, 10000);
    updatePredictions();
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 relative"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Sustainability Insights</h2>
        <button
          onClick={() => setShowAwareness(!showAwareness)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Info size={20} />
          Learn More
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-gray-400 mb-2">Next Month Savings</h3>
        <p className="text-2xl font-bold text-green-400">
          {predictions.nextMonthSavings.toLocaleString()} cups
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-gray-400 mb-2">Year-End Projection</h3>
        <p className="text-2xl font-bold text-blue-400">
          {predictions.yearEndProjection.toLocaleString()} cups
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-gray-400 mb-2">Sustainability Score</h3>
        <div className="flex items-center">
          <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${predictions.sustainabilityScore}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-green-400 to-blue-500"
            />
          </div>
          <span className="ml-4 font-bold text-xl text-white">
            {predictions.sustainabilityScore}%
          </span>
        </div>
      </div>

      {showAwareness && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-4 bg-gray-800 rounded-lg p-6 shadow-xl z-10"
        >
          <h3 className="text-xl font-bold mb-4">Sustainability Impact</h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Community Impact</h4>
              <p className="text-sm text-gray-300">
                Your sustainable choices inspire others. When one person switches to reusable cups, it creates a ripple effect in the community.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Environmental Benefits</h4>
              <p className="text-sm text-gray-300">
                Every reusable cup prevents hundreds of disposable cups from reaching landfills and reduces CO₂ emissions from production and transportation.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Future Impact</h4>
              <p className="text-sm text-gray-300">
                Our ML predictions show that consistent sustainable choices can lead to exponential growth in positive environmental impact.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};