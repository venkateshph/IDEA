import React from 'react';
import { useDrag } from 'react-dnd';
import './SoilSensor.css';
import sensorImage from './sensor1.jpg'; // Add your sensor image path here

function SoilSensor() {
  const [{ isDragging }, drag] = useDrag({
    type: 'sensor',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="soil-sensor"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img src={sensorImage} alt="Soil Sensor" className="sensor-img" />
    </div>
  );
}

export default SoilSensor;
