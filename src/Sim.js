import React from 'react';
import FloorButton from './Building';
import Building from './Building';
import ElevatorBank from './ElevatorBank';

// Main Entry point for application
class Sim extends React.Component {
  render() {
    return (
      <div className = "elevator">
        <ElevatorBank numElevators = {6}/>
        <Building floors = {6}/>
      </div>
    );
  }
}

export default Sim;
