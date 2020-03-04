import React from 'react';
import './styles.css';

//TODO contains FloorButtons, each one requests to Bank.elevators
class Building extends React.Component {
  constructor(props) {
    super(props);

    // array of floors based on number of floors passed through props
    this.floors = [];
    for(let i = props.floors; i >= 1; i--)
      this.floors.push(i);
  }

  // TODO
  render() {
    return (
      <div className = "page-wrapper">
        <div className = "building-wrapper">
            {this.floors.map((floor) => <FloorButton floor = {floor}/>)}
        </div>
      </div>
    );
  }
}

//TODO sends floor requests to Bank.elevators
class FloorButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      floor: props.floor,
    };
  }

  render() {
    return (
        <button className = "floor-button">{this.state.floor}</button>
    );
  }
}


export default Building
