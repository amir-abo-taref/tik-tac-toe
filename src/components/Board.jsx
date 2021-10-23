import React, { Component } from "react";
import Circle from "./Circle";

export default class Board extends Component {
  renderCircle(i) {
    return (
      <Circle
        value={this.props.Circles[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="tiktactoe-border">
          {this.renderCircle(0)}
          {this.renderCircle(1)}
          {this.renderCircle(2)}
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
          {this.renderCircle(6)}
          {this.renderCircle(7)}
          {this.renderCircle(8)} 
        </div>
      </div>
    );
  }
}
