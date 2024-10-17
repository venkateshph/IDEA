import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SoilCanvas from './SoilCanvas';
import SoilSensor from './SoilSensor';
import './App.css';

function App() {
  const [sensorData, setSensorData] = useState(null);

  const handleSensorPlacement = (soilType) => {
    const soilProperties =
      soilType === 'red'
        ? { 
            type: 'Red Soil', 
            color: 'red', 
            properties: 'Moisture: 20%, pH: 6.5', 
            nitrogen: 'High', 
            phosphorus: 'Moderate', 
            potassium: 'Low' 
          }
        : { 
            type: 'Black Soil', 
            color: 'black', 
            properties: 'Moisture: 35%, pH: 7.2', 
            nitrogen: 'Low', 
            phosphorus: 'High', 
            potassium: 'Moderate' 
          };

    setSensorData(soilProperties);
  };

  const handleSensorRemoval = () => {
    setSensorData(null); // Clear the sensor data when the sensor is removed
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        {/* Left panel for the sensor tool */}
        <div className="left-panel">
          <SoilSensor />
        </div>

        {/* Right panel for the info panel and soil canvas */}
        <div className="right-panel">
          <div className="info-panel">
            <h1>Soil Sensor Simulation</h1>
            <p>
              Drag the sensor tool and place it on different soil types to get
              their readings.
            </p>
            {sensorData ? (
              <div className="sensor-data">
                <p><strong>Soil Type:</strong> {sensorData.type}</p>
                <p><strong>Properties:</strong> {sensorData.properties}</p>
                <p><strong>Nitrogen:</strong> {sensorData.nitrogen}</p>
                <p><strong>Phosphorus:</strong> {sensorData.phosphorus}</p>
                <p><strong>Potassium:</strong> {sensorData.potassium}</p>
              </div>
            ) : (
              <div className="sensor-data">
                <p>No sensor placed yet.</p>
              </div>
            )}
          </div>

          {/* Pass handleSensorPlacement and handleSensorRemoval to SoilCanvas */}
          <SoilCanvas onSensorPlacement={handleSensorPlacement} onSensorRemoval={handleSensorRemoval} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
