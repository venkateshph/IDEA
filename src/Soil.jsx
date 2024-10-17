import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './Soil.css';
import sensorImage from './sensor1.jpg'; // Add your sensor image path here

function Soil({ type, onDrop, onRemoveSensor }) {
  const [sensorDropped, setSensorDropped] = useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: 'sensor',
    drop: () => {
      onDrop(type);
      setSensorDropped(true);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleRightClick = (e) => {
    e.preventDefault(); // Prevent the default right-click menu
    if (sensorDropped) {
      setSensorDropped(false); // Remove the sensor image
      onRemoveSensor(); // Clear the sensor data
    }
  };

  const getSoilStyle = () => {
    return type === 'red' ? 'red-soil' : 'black-soil';
  };

  return (
    <div
      ref={drop}
      className={`soil ${getSoilStyle()}`}
      onContextMenu={handleRightClick} // Handle right-click event
      style={{
        opacity: isOver ? 0.8 : 1,
      }}
    >
      {isOver && <span className="drop-hint">Drop Sensor Here!</span>}
      <span className="soil-label">
        {type === 'red' ? 'Red Soil' : 'Black Soil'}
      </span>
      {sensorDropped && (
        <img src={sensorImage} alt="Sensor" className="sensor-dropped-img" />
      )}
    </div>
  );
}

export default Soil;
