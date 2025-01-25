import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

export const ReusableMetrics = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPercentage(Math.min(100, percentage + Math.random() * 5));
    }, 2000);

    return () => clearInterval(interval);
  }, [percentage]);

  useEffect(() => {
    // D3.js circular progress
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    d3.select('#progress-container').selectAll('*').remove();

    const svg = d3.select('#progress-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arc = d3.arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle(0);

    // Background arc
    svg.append('path')
      .datum({ endAngle: 2 * Math.PI })
      .style('fill', '#1F2937')
      .attr('d', arc);

    // Foreground arc
    svg.append('path')
      .datum({ endAngle: (percentage / 100) * 2 * Math.PI })
      .style('fill', '#34D399')
      .attr('d', arc);

    // Percentage text
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('class', 'text-3xl font-bold')
      .attr('fill', 'white')
      .text(`${Math.round(percentage)}%`);
  }, [percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <div id="progress-container" className="mb-4"></div>
      <p className="text-gray-300 text-center">
        of customers are using reusable cups
      </p>
    </motion.div>
  );
};