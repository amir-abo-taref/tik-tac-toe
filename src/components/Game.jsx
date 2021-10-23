import React, { Component } from "react";
import Board from "./Board";


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextstep: Boolean(Math.round(Math.random())),
      stepNumber: 0,
      FillHistory: [{ Circles: Array(9).fill('') }],
    };
  }
  handleClick(i) {
    const FillHistory = this.state.FillHistory.slice(
      0,
      this.state.stepNumber + 1
    );
    const current = FillHistory[FillHistory.length - 1];
    const Circles = current.Circles.slice();
    const winner = calculateWinner(Circles);
    if (winner || Circles[i]) {
      return;
    }
    Circles[i] = this.state.nextstep ? "X" : "O";
    this.setState({
      FillHistory: FillHistory.concat({
        Circles: Circles,
      }),
      nextstep: !this.state.nextstep,
      stepNumber: FillHistory.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextstep: step % 2 === 0,
    });
  }
  render() {
    const FillHistory = this.state.FillHistory;
    const current = FillHistory[this.state.stepNumber];
    const winner = calculateWinner(current.Circles);
    const moves = FillHistory.map((step, move) => {
      const start = move ? "Go to step=>" + move : "lets start";
      return (
        <li key={move}>
          <input
            type="button"
            value={start}
            onClick={() => {
              this.jumpTo(move);
            }}
          />
        </li>
      );
    });
    let status;
    if (winner) {
      status = winner + "-is the winner";
    } else {
      status = "player " + (this.state.nextstep ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.handleClick(i)}
            Circles={current.Circles}
          />
        </div>
        <div className="game-info">
        <h1>tic-tac-toe</h1>
          <div>{status}</div>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

function calculateWinner(Circles) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (Circles[a] && Circles[a] === Circles[b] && Circles[b] === Circles[c]) {
      return Circles[a];
    }
  }

  return null;
}
