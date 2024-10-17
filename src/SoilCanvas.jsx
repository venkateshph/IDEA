import React from 'react';
import Soil from './Soil';
import './SoilCanvas.css';

function SoilCanvas({ onSensorPlacement, onSensorRemoval }) {
  return (
    <div className="soil-canvas">
      <Soil type="red" onDrop={onSensorPlacement} onRemoveSensor={onSensorRemoval} />
      <Soil type="black" onDrop={onSensorPlacement} onRemoveSensor={onSensorRemoval} />
    </div>
  );
}

export default SoilCanvas;
