import React from 'react';
import './styles.css';


//TODO contains elevators and accepts requests from Building.floorbuttons
class ElevatorBank extends React.Component {
  constructor(props) {
    super(props);

    // array of floors to put elevators
    this.floors = [];
    for(let i = props.numElevators; i >= 1; i--)
      this.floors.push(i);
  }

  render() {
    return (
        <div className = "page-wrapper">
          <div className = "elevator-bank-wrapper">
            {this.floors.map((floor) =>
              <Elevator floor={floor} />
            )}
          </div>
        </div>
    );
  }
}

//TODO
class Elevator extends React.Component {
  constructor(props) {

    //TODO create queue for floor requests
    super(props);

    this.state = {
      floor: props.floor,
    };
  }

  render() {

    return (
        <div className ="elevator">{this.state.floor}</div>
    );
  }
}

//TODO sends floor request to Elevator
class ElevatorButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      floor: props.floor,
    };
  }

  render() {

    return (
      <div>
      </div>
    );
  }
}

export default ElevatorBank;
