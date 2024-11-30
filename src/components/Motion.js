import React from 'react';
import { motion } from 'framer-motion';
import './Motion.css';
const TimelineStep = ({ icon, title, description }) => (
  <motion.div
    className="timeline-step"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="icon">{icon}</div>
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const Timeline = () => (
  <div className="timeline">
    <h2>How does it work?</h2>
    <TimelineStep
      icon="🔍"
      title="Search your favourite topic"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
    <TimelineStep
      icon="📑"
      title="Bookmark & Keep it for yourself"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    />
    <TimelineStep
      icon="📖"
      title="Read & Enjoy"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    />
  </div>
);

export default Timeline;
